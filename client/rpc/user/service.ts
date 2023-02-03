/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "eliott";

export interface PingReq {
}

export interface PingRes {
  status: boolean;
}

export interface User {
  id: string;
  username: string;
  password: string;
  createdAt: string;
}

export interface UserRes {
  id: string;
  username: string;
  createdAt: string;
}

export interface CreateUserReq {
  username: string;
  password: string;
}

export interface CreateUserRes {
  user: UserRes | undefined;
}

export interface GetUserByIDReq {
  id: string;
}

export interface GetUserByIDRes {
  user: User | undefined;
}

export interface ListUsersReq {
}

export interface ListUsersRes {
  users: User[];
}

function createBasePingReq(): PingReq {
  return {};
}

export const PingReq = {
  encode(_: PingReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PingReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePingReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): PingReq {
    return {};
  },

  toJSON(_: PingReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<PingReq>, I>>(base?: I): PingReq {
    return PingReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PingReq>, I>>(_: I): PingReq {
    const message = createBasePingReq();
    return message;
  },
};

function createBasePingRes(): PingRes {
  return { status: false };
}

export const PingRes = {
  encode(message: PingRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status === true) {
      writer.uint32(8).bool(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PingRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePingRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PingRes {
    return { status: isSet(object.status) ? Boolean(object.status) : false };
  },

  toJSON(message: PingRes): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  create<I extends Exact<DeepPartial<PingRes>, I>>(base?: I): PingRes {
    return PingRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PingRes>, I>>(object: I): PingRes {
    const message = createBasePingRes();
    message.status = object.status ?? false;
    return message;
  },
};

function createBaseUser(): User {
  return { id: "", username: "", password: "", createdAt: "" };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(26).string(message.password);
    }
    if (message.createdAt !== "") {
      writer.uint32(34).string(message.createdAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.username = reader.string();
          break;
        case 3:
          message.password = reader.string();
          break;
        case 4:
          message.createdAt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      username: isSet(object.username) ? String(object.username) : "",
      password: isSet(object.password) ? String(object.password) : "",
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : "",
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.username !== undefined && (obj.username = message.username);
    message.password !== undefined && (obj.password = message.password);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    return obj;
  },

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.id = object.id ?? "";
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    message.createdAt = object.createdAt ?? "";
    return message;
  },
};

function createBaseUserRes(): UserRes {
  return { id: "", username: "", createdAt: "" };
}

export const UserRes = {
  encode(message: UserRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.createdAt !== "") {
      writer.uint32(26).string(message.createdAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.username = reader.string();
          break;
        case 3:
          message.createdAt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserRes {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      username: isSet(object.username) ? String(object.username) : "",
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : "",
    };
  },

  toJSON(message: UserRes): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.username !== undefined && (obj.username = message.username);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    return obj;
  },

  create<I extends Exact<DeepPartial<UserRes>, I>>(base?: I): UserRes {
    return UserRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserRes>, I>>(object: I): UserRes {
    const message = createBaseUserRes();
    message.id = object.id ?? "";
    message.username = object.username ?? "";
    message.createdAt = object.createdAt ?? "";
    return message;
  },
};

function createBaseCreateUserReq(): CreateUserReq {
  return { username: "", password: "" };
}

export const CreateUserReq = {
  encode(message: CreateUserReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.username = reader.string();
          break;
        case 2:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateUserReq {
    return {
      username: isSet(object.username) ? String(object.username) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: CreateUserReq): unknown {
    const obj: any = {};
    message.username !== undefined && (obj.username = message.username);
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateUserReq>, I>>(base?: I): CreateUserReq {
    return CreateUserReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateUserReq>, I>>(object: I): CreateUserReq {
    const message = createBaseCreateUserReq();
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseCreateUserRes(): CreateUserRes {
  return { user: undefined };
}

export const CreateUserRes = {
  encode(message: CreateUserRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      UserRes.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = UserRes.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateUserRes {
    return { user: isSet(object.user) ? UserRes.fromJSON(object.user) : undefined };
  },

  toJSON(message: CreateUserRes): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user ? UserRes.toJSON(message.user) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateUserRes>, I>>(base?: I): CreateUserRes {
    return CreateUserRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateUserRes>, I>>(object: I): CreateUserRes {
    const message = createBaseCreateUserRes();
    message.user = (object.user !== undefined && object.user !== null) ? UserRes.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseGetUserByIDReq(): GetUserByIDReq {
  return { id: "" };
}

export const GetUserByIDReq = {
  encode(message: GetUserByIDReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserByIDReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserByIDReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUserByIDReq {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: GetUserByIDReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserByIDReq>, I>>(base?: I): GetUserByIDReq {
    return GetUserByIDReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetUserByIDReq>, I>>(object: I): GetUserByIDReq {
    const message = createBaseGetUserByIDReq();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetUserByIDRes(): GetUserByIDRes {
  return { user: undefined };
}

export const GetUserByIDRes = {
  encode(message: GetUserByIDRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserByIDRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserByIDRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUserByIDRes {
    return { user: isSet(object.user) ? User.fromJSON(object.user) : undefined };
  },

  toJSON(message: GetUserByIDRes): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserByIDRes>, I>>(base?: I): GetUserByIDRes {
    return GetUserByIDRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetUserByIDRes>, I>>(object: I): GetUserByIDRes {
    const message = createBaseGetUserByIDRes();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseListUsersReq(): ListUsersReq {
  return {};
}

export const ListUsersReq = {
  encode(_: ListUsersReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUsersReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUsersReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ListUsersReq {
    return {};
  },

  toJSON(_: ListUsersReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ListUsersReq>, I>>(base?: I): ListUsersReq {
    return ListUsersReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ListUsersReq>, I>>(_: I): ListUsersReq {
    const message = createBaseListUsersReq();
    return message;
  },
};

function createBaseListUsersRes(): ListUsersRes {
  return { users: [] };
}

export const ListUsersRes = {
  encode(message: ListUsersRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUsersRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUsersRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.users.push(User.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListUsersRes {
    return { users: Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [] };
  },

  toJSON(message: ListUsersRes): unknown {
    const obj: any = {};
    if (message.users) {
      obj.users = message.users.map((e) => e ? User.toJSON(e) : undefined);
    } else {
      obj.users = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListUsersRes>, I>>(base?: I): ListUsersRes {
    return ListUsersRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ListUsersRes>, I>>(object: I): ListUsersRes {
    const message = createBaseListUsersRes();
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

export interface UserService {
  Ping(request: PingReq): Promise<PingRes>;
  CreateUser(request: CreateUserReq): Promise<CreateUserRes>;
  GetUserByID(request: GetUserByIDReq): Promise<GetUserByIDRes>;
  ListUsers(request: ListUsersReq): Promise<ListUsersRes>;
}

export class UserServiceClientImpl implements UserService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "eliott.UserService";
    this.rpc = rpc;
    this.Ping = this.Ping.bind(this);
    this.CreateUser = this.CreateUser.bind(this);
    this.GetUserByID = this.GetUserByID.bind(this);
    this.ListUsers = this.ListUsers.bind(this);
  }
  Ping(request: PingReq): Promise<PingRes> {
    const data = PingReq.encode(request).finish();
    const promise = this.rpc.request(this.service, "Ping", data);
    return promise.then((data) => PingRes.decode(new _m0.Reader(data)));
  }

  CreateUser(request: CreateUserReq): Promise<CreateUserRes> {
    const data = CreateUserReq.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateUser", data);
    return promise.then((data) => CreateUserRes.decode(new _m0.Reader(data)));
  }

  GetUserByID(request: GetUserByIDReq): Promise<GetUserByIDRes> {
    const data = GetUserByIDReq.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetUserByID", data);
    return promise.then((data) => GetUserByIDRes.decode(new _m0.Reader(data)));
  }

  ListUsers(request: ListUsersReq): Promise<ListUsersRes> {
    const data = ListUsersReq.encode(request).finish();
    const promise = this.rpc.request(this.service, "ListUsers", data);
    return promise.then((data) => ListUsersRes.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
