package user

import (
	context "context"
	errors "errors"
	fmt "fmt"
	sync "sync"
	"time"
)

type Service struct {
	users map[string]*User
	mu    sync.Mutex
}

var _ UserService = (*Service)(nil)

func NewService() *Service {
	return &Service{
		users: make(map[string]*User),
	}
}

func (s *Service) Ping(_ context.Context, _ *PingReq) (*PingRes, error) {
	return &PingRes{Status: true}, nil
}

func (s *Service) CreateUser(_ context.Context, req *CreateUserReq) (*CreateUserRes, error) {
	if req.Username == "" {
		return nil, errors.New("username is empty")
	}
	if req.Password == "" {
		return nil, errors.New("password is empty")
	}

	u := &User{
		Username:  req.Username,
		Password:  req.Password,
		Id:        fmt.Sprint(len(s.users) + 1),
		CreatedAt: time.Now().String(),
	}

	s.mu.Lock()
	s.users[u.Id] = u
	s.mu.Unlock()

	return &CreateUserRes{User: &UserRes{Id: u.Id, Username: u.Username, CreatedAt: u.CreatedAt}}, nil
}

func (s *Service) GetUserByID(_ context.Context, req *GetUserByIDReq) (*GetUserByIDRes, error) {
	if req.Id == "" {
		return nil, errors.New("userID is empty")
	}

	s.mu.Lock()
	defer s.mu.Unlock()

	u, ok := s.users[req.Id]
	if !ok {
		return nil, errors.New("user not found")
	}

	return &GetUserByIDRes{User: u}, nil
}

func (s *Service) ListUsers(_ context.Context, _ *ListUsersReq) (*ListUsersRes, error) {
	s.mu.Lock()
	defer s.mu.Unlock()

	users := make([]*User, 0, len(s.users))
	for _, u := range s.users {
		users = append(users, u)
	}

	return &ListUsersRes{Users: users}, nil
}
