// @generated by protoc-gen-connect-es v1.5.0 with parameter "target=ts"
// @generated from file greet/v1/greet.proto (package greet.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GreetRequest, GreetResponse } from "./greet_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service greet.v1.GreetService
 */
export const GreetService = {
  typeName: "greet.v1.GreetService",
  methods: {
    /**
     * @generated from rpc greet.v1.GreetService.Greet
     */
    greet: {
      name: "Greet",
      I: GreetRequest,
      O: GreetResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

