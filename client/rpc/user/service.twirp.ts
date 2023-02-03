import {
  TwirpContext,
  TwirpServer,
  RouterEvents,
  TwirpError,
  TwirpErrorCode,
  Interceptor,
  TwirpContentType,
  chainInterceptors,
} from "twirp-ts";
import {
  PingReq,
  PingRes,
  CreateUserReq,
  CreateUserRes,
  GetUserByIDReq,
  GetUserByIDRes,
  ListUsersReq,
  ListUsersRes,
} from "./service";

//==================================//
//          Client Code             //
//==================================//

interface Rpc {
  request(
    service: string,
    method: string,
    contentType: "application/json" | "application/protobuf",
    data: object | Uint8Array
  ): Promise<object | Uint8Array>;
}

export interface UserServiceClient {
  Ping(request: PingReq): Promise<PingRes>;
  CreateUser(request: CreateUserReq): Promise<CreateUserRes>;
  GetUserByID(request: GetUserByIDReq): Promise<GetUserByIDRes>;
  ListUsers(request: ListUsersReq): Promise<ListUsersRes>;
}

export class UserServiceClientJSON implements UserServiceClient {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Ping.bind(this);
    this.CreateUser.bind(this);
    this.GetUserByID.bind(this);
    this.ListUsers.bind(this);
  }
  Ping(request: PingReq): Promise<PingRes> {
    const data = PingReq.toJSON(request);
    const promise = this.rpc.request(
      "eliott.UserService",
      "Ping",
      "application/json",
      data as object
    );
    return promise.then((data) => PingRes.fromJSON(data as any));
  }

  CreateUser(request: CreateUserReq): Promise<CreateUserRes> {
    const data = CreateUserReq.toJSON(request);
    const promise = this.rpc.request(
      "eliott.UserService",
      "CreateUser",
      "application/json",
      data as object
    );
    return promise.then((data) => CreateUserRes.fromJSON(data as any));
  }

  GetUserByID(request: GetUserByIDReq): Promise<GetUserByIDRes> {
    const data = GetUserByIDReq.toJSON(request);
    const promise = this.rpc.request(
      "eliott.UserService",
      "GetUserByID",
      "application/json",
      data as object
    );
    return promise.then((data) => GetUserByIDRes.fromJSON(data as any));
  }

  ListUsers(request: ListUsersReq): Promise<ListUsersRes> {
    const data = ListUsersReq.toJSON(request);
    const promise = this.rpc.request(
      "eliott.UserService",
      "ListUsers",
      "application/json",
      data as object
    );
    return promise.then((data) => ListUsersRes.fromJSON(data as any));
  }
}

export class UserServiceClientProtobuf implements UserServiceClient {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Ping.bind(this);
    this.CreateUser.bind(this);
    this.GetUserByID.bind(this);
    this.ListUsers.bind(this);
  }
  Ping(request: PingReq): Promise<PingRes> {
    const data = PingReq.encode(request).finish();
    const promise = this.rpc.request(
      "eliott.UserService",
      "Ping",
      "application/protobuf",
      data
    );
    return promise.then((data) => PingRes.decode(data as Uint8Array));
  }

  CreateUser(request: CreateUserReq): Promise<CreateUserRes> {
    const data = CreateUserReq.encode(request).finish();
    const promise = this.rpc.request(
      "eliott.UserService",
      "CreateUser",
      "application/protobuf",
      data
    );
    return promise.then((data) => CreateUserRes.decode(data as Uint8Array));
  }

  GetUserByID(request: GetUserByIDReq): Promise<GetUserByIDRes> {
    const data = GetUserByIDReq.encode(request).finish();
    const promise = this.rpc.request(
      "eliott.UserService",
      "GetUserByID",
      "application/protobuf",
      data
    );
    return promise.then((data) => GetUserByIDRes.decode(data as Uint8Array));
  }

  ListUsers(request: ListUsersReq): Promise<ListUsersRes> {
    const data = ListUsersReq.encode(request).finish();
    const promise = this.rpc.request(
      "eliott.UserService",
      "ListUsers",
      "application/protobuf",
      data
    );
    return promise.then((data) => ListUsersRes.decode(data as Uint8Array));
  }
}

//==================================//
//          Server Code             //
//==================================//

export interface UserServiceTwirp<T extends TwirpContext = TwirpContext> {
  Ping(ctx: T, request: PingReq): Promise<PingRes>;
  CreateUser(ctx: T, request: CreateUserReq): Promise<CreateUserRes>;
  GetUserByID(ctx: T, request: GetUserByIDReq): Promise<GetUserByIDRes>;
  ListUsers(ctx: T, request: ListUsersReq): Promise<ListUsersRes>;
}

export enum UserServiceMethod {
  Ping = "Ping",
  CreateUser = "CreateUser",
  GetUserByID = "GetUserByID",
  ListUsers = "ListUsers",
}

export const UserServiceMethodList = [
  UserServiceMethod.Ping,
  UserServiceMethod.CreateUser,
  UserServiceMethod.GetUserByID,
  UserServiceMethod.ListUsers,
];

export function createUserServiceServer<T extends TwirpContext = TwirpContext>(
  service: UserServiceTwirp<T>
) {
  return new TwirpServer<UserServiceTwirp, T>({
    service,
    packageName: "eliott",
    serviceName: "UserService",
    methodList: UserServiceMethodList,
    matchRoute: matchUserServiceRoute,
  });
}

function matchUserServiceRoute<T extends TwirpContext = TwirpContext>(
  method: string,
  events: RouterEvents<T>
) {
  switch (method) {
    case "Ping":
      return async (
        ctx: T,
        service: UserServiceTwirp,
        data: Buffer,
        interceptors?: Interceptor<T, PingReq, PingRes>[]
      ) => {
        ctx = { ...ctx, methodName: "Ping" };
        await events.onMatch(ctx);
        return handleUserServicePingRequest(ctx, service, data, interceptors);
      };
    case "CreateUser":
      return async (
        ctx: T,
        service: UserServiceTwirp,
        data: Buffer,
        interceptors?: Interceptor<T, CreateUserReq, CreateUserRes>[]
      ) => {
        ctx = { ...ctx, methodName: "CreateUser" };
        await events.onMatch(ctx);
        return handleUserServiceCreateUserRequest(
          ctx,
          service,
          data,
          interceptors
        );
      };
    case "GetUserByID":
      return async (
        ctx: T,
        service: UserServiceTwirp,
        data: Buffer,
        interceptors?: Interceptor<T, GetUserByIDReq, GetUserByIDRes>[]
      ) => {
        ctx = { ...ctx, methodName: "GetUserByID" };
        await events.onMatch(ctx);
        return handleUserServiceGetUserByIDRequest(
          ctx,
          service,
          data,
          interceptors
        );
      };
    case "ListUsers":
      return async (
        ctx: T,
        service: UserServiceTwirp,
        data: Buffer,
        interceptors?: Interceptor<T, ListUsersReq, ListUsersRes>[]
      ) => {
        ctx = { ...ctx, methodName: "ListUsers" };
        await events.onMatch(ctx);
        return handleUserServiceListUsersRequest(
          ctx,
          service,
          data,
          interceptors
        );
      };
    default:
      events.onNotFound();
      const msg = `no handler found`;
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
  }
}

function handleUserServicePingRequest<T extends TwirpContext = TwirpContext>(
  ctx: T,
  service: UserServiceTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, PingReq, PingRes>[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handleUserServicePingJSON<T>(ctx, service, data, interceptors);
    case TwirpContentType.Protobuf:
      return handleUserServicePingProtobuf<T>(ctx, service, data, interceptors);
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
  }
}

function handleUserServiceCreateUserRequest<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: UserServiceTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, CreateUserReq, CreateUserRes>[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handleUserServiceCreateUserJSON<T>(
        ctx,
        service,
        data,
        interceptors
      );
    case TwirpContentType.Protobuf:
      return handleUserServiceCreateUserProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      );
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
  }
}

function handleUserServiceGetUserByIDRequest<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: UserServiceTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetUserByIDReq, GetUserByIDRes>[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handleUserServiceGetUserByIDJSON<T>(
        ctx,
        service,
        data,
        interceptors
      );
    case TwirpContentType.Protobuf:
      return handleUserServiceGetUserByIDProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      );
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
  }
}

function handleUserServiceListUsersRequest<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: UserServiceTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, ListUsersReq, ListUsersRes>[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handleUserServiceListUsersJSON<T>(
        ctx,
        service,
        data,
        interceptors
      );
    case TwirpContentType.Protobuf:
      return handleUserServiceListUsersProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      );
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
  }
}
async function handleUserServicePingJSON<T extends TwirpContext = TwirpContext>(
  ctx: T,
  service: UserServiceTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, PingReq, PingRes>[]
) {
  let request: PingReq;
  let response: PingRes;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = PingReq.fromJSON(body);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      PingReq,
      PingRes
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.Ping(ctx, inputReq);
    });
  } else {
    response = await service.Ping(ctx, request!);
  }

  return JSON.stringify(PingRes.toJSON(response) as string);
}

async function handleUserServiceCreateUserJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: UserServiceTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, CreateUserReq, CreateUserRes>[]
) {
  let request: CreateUserReq;
  let response: CreateUserRes;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = CreateUserReq.fromJSON(body);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      CreateUserReq,
      CreateUserRes
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.CreateUser(ctx, inputReq);
    });
  } else {
    response = await service.CreateUser(ctx, request!);
  }

  return JSON.stringify(CreateUserRes.toJSON(response) as string);
}

async function handleUserServiceGetUserByIDJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: UserServiceTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetUserByIDReq, GetUserByIDRes>[]
) {
  let request: GetUserByIDReq;
  let response: GetUserByIDRes;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = GetUserByIDReq.fromJSON(body);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetUserByIDReq,
      GetUserByIDRes
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetUserByID(ctx, inputReq);
    });
  } else {
    response = await service.GetUserByID(ctx, request!);
  }

  return JSON.stringify(GetUserByIDRes.toJSON(response) as string);
}

async function handleUserServiceListUsersJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: UserServiceTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, ListUsersReq, ListUsersRes>[]
) {
  let request: ListUsersReq;
  let response: ListUsersRes;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = ListUsersReq.fromJSON(body);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      ListUsersReq,
      ListUsersRes
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.ListUsers(ctx, inputReq);
    });
  } else {
    response = await service.ListUsers(ctx, request!);
  }

  return JSON.stringify(ListUsersRes.toJSON(response) as string);
}
async function handleUserServicePingProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: UserServiceTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, PingReq, PingRes>[]
) {
  let request: PingReq;
  let response: PingRes;

  try {
    request = PingReq.decode(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      PingReq,
      PingRes
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.Ping(ctx, inputReq);
    });
  } else {
    response = await service.Ping(ctx, request!);
  }

  return Buffer.from(PingRes.encode(response).finish());
}

async function handleUserServiceCreateUserProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: UserServiceTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, CreateUserReq, CreateUserRes>[]
) {
  let request: CreateUserReq;
  let response: CreateUserRes;

  try {
    request = CreateUserReq.decode(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      CreateUserReq,
      CreateUserRes
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.CreateUser(ctx, inputReq);
    });
  } else {
    response = await service.CreateUser(ctx, request!);
  }

  return Buffer.from(CreateUserRes.encode(response).finish());
}

async function handleUserServiceGetUserByIDProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: UserServiceTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetUserByIDReq, GetUserByIDRes>[]
) {
  let request: GetUserByIDReq;
  let response: GetUserByIDRes;

  try {
    request = GetUserByIDReq.decode(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetUserByIDReq,
      GetUserByIDRes
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetUserByID(ctx, inputReq);
    });
  } else {
    response = await service.GetUserByID(ctx, request!);
  }

  return Buffer.from(GetUserByIDRes.encode(response).finish());
}

async function handleUserServiceListUsersProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: UserServiceTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, ListUsersReq, ListUsersRes>[]
) {
  let request: ListUsersReq;
  let response: ListUsersRes;

  try {
    request = ListUsersReq.decode(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      ListUsersReq,
      ListUsersRes
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.ListUsers(ctx, inputReq);
    });
  } else {
    response = await service.ListUsers(ctx, request!);
  }

  return Buffer.from(ListUsersRes.encode(response).finish());
}
