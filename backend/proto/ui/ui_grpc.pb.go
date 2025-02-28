// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package ui

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// UIClient is the client API for UI service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type UIClient interface {
	GetEvents(ctx context.Context, in *GetEventsRequest, opts ...grpc.CallOption) (UI_GetEventsClient, error)
	GetStatus(ctx context.Context, in *GetStatusRequest, opts ...grpc.CallOption) (*GetStatusResponse, error)
}

type uIClient struct {
	cc grpc.ClientConnInterface
}

func NewUIClient(cc grpc.ClientConnInterface) UIClient {
	return &uIClient{cc}
}

func (c *uIClient) GetEvents(ctx context.Context, in *GetEventsRequest, opts ...grpc.CallOption) (UI_GetEventsClient, error) {
	stream, err := c.cc.NewStream(ctx, &UI_ServiceDesc.Streams[0], "/ui.UI/GetEvents", opts...)
	if err != nil {
		return nil, err
	}
	x := &uIGetEventsClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type UI_GetEventsClient interface {
	Recv() (*GetEventsResponse, error)
	grpc.ClientStream
}

type uIGetEventsClient struct {
	grpc.ClientStream
}

func (x *uIGetEventsClient) Recv() (*GetEventsResponse, error) {
	m := new(GetEventsResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *uIClient) GetStatus(ctx context.Context, in *GetStatusRequest, opts ...grpc.CallOption) (*GetStatusResponse, error) {
	out := new(GetStatusResponse)
	err := c.cc.Invoke(ctx, "/ui.UI/GetStatus", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// UIServer is the server API for UI service.
// All implementations must embed UnimplementedUIServer
// for forward compatibility
type UIServer interface {
	GetEvents(*GetEventsRequest, UI_GetEventsServer) error
	GetStatus(context.Context, *GetStatusRequest) (*GetStatusResponse, error)
	mustEmbedUnimplementedUIServer()
}

// UnimplementedUIServer must be embedded to have forward compatible implementations.
type UnimplementedUIServer struct {
}

func (UnimplementedUIServer) GetEvents(*GetEventsRequest, UI_GetEventsServer) error {
	return status.Errorf(codes.Unimplemented, "method GetEvents not implemented")
}
func (UnimplementedUIServer) GetStatus(context.Context, *GetStatusRequest) (*GetStatusResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetStatus not implemented")
}
func (UnimplementedUIServer) mustEmbedUnimplementedUIServer() {}

// UnsafeUIServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to UIServer will
// result in compilation errors.
type UnsafeUIServer interface {
	mustEmbedUnimplementedUIServer()
}

func RegisterUIServer(s grpc.ServiceRegistrar, srv UIServer) {
	s.RegisterService(&UI_ServiceDesc, srv)
}

func _UI_GetEvents_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(GetEventsRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(UIServer).GetEvents(m, &uIGetEventsServer{stream})
}

type UI_GetEventsServer interface {
	Send(*GetEventsResponse) error
	grpc.ServerStream
}

type uIGetEventsServer struct {
	grpc.ServerStream
}

func (x *uIGetEventsServer) Send(m *GetEventsResponse) error {
	return x.ServerStream.SendMsg(m)
}

func _UI_GetStatus_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetStatusRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UIServer).GetStatus(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ui.UI/GetStatus",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UIServer).GetStatus(ctx, req.(*GetStatusRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// UI_ServiceDesc is the grpc.ServiceDesc for UI service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var UI_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "ui.UI",
	HandlerType: (*UIServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetStatus",
			Handler:    _UI_GetStatus_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "GetEvents",
			Handler:       _UI_GetEvents_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "ui/ui.proto",
}
