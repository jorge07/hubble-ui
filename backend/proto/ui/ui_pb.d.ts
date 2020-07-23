import * as jspb from "google-protobuf"

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as flow_flow_pb from '../flow/flow_pb';

export class GetEventsRequest extends jspb.Message {
  getEventTypesList(): Array<EventType>;
  setEventTypesList(value: Array<EventType>): GetEventsRequest;
  clearEventTypesList(): GetEventsRequest;
  addEventTypes(value: EventType, index?: number): GetEventsRequest;

  getBlacklistList(): Array<EventFilter>;
  setBlacklistList(value: Array<EventFilter>): GetEventsRequest;
  clearBlacklistList(): GetEventsRequest;
  addBlacklist(value?: EventFilter, index?: number): EventFilter;

  getWhitelistList(): Array<EventFilter>;
  setWhitelistList(value: Array<EventFilter>): GetEventsRequest;
  clearWhitelistList(): GetEventsRequest;
  addWhitelist(value?: EventFilter, index?: number): EventFilter;

  getSince(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSince(value?: google_protobuf_timestamp_pb.Timestamp): GetEventsRequest;
  hasSince(): boolean;
  clearSince(): GetEventsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventsRequest): GetEventsRequest.AsObject;
  static serializeBinaryToWriter(message: GetEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventsRequest;
  static deserializeBinaryFromReader(message: GetEventsRequest, reader: jspb.BinaryReader): GetEventsRequest;
}

export namespace GetEventsRequest {
  export type AsObject = {
    eventTypesList: Array<EventType>,
    blacklistList: Array<EventFilter.AsObject>,
    whitelistList: Array<EventFilter.AsObject>,
    since?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetEventsResponse extends jspb.Message {
  getNode(): string;
  setNode(value: string): GetEventsResponse;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): GetEventsResponse;
  hasTimestamp(): boolean;
  clearTimestamp(): GetEventsResponse;

  getFlow(): flow_flow_pb.Flow | undefined;
  setFlow(value?: flow_flow_pb.Flow): GetEventsResponse;
  hasFlow(): boolean;
  clearFlow(): GetEventsResponse;

  getK8sNamespaceState(): K8sNamespaceState | undefined;
  setK8sNamespaceState(value?: K8sNamespaceState): GetEventsResponse;
  hasK8sNamespaceState(): boolean;
  clearK8sNamespaceState(): GetEventsResponse;

  getServiceState(): ServiceState | undefined;
  setServiceState(value?: ServiceState): GetEventsResponse;
  hasServiceState(): boolean;
  clearServiceState(): GetEventsResponse;

  getServiceLinkState(): ServiceLinkState | undefined;
  setServiceLinkState(value?: ServiceLinkState): GetEventsResponse;
  hasServiceLinkState(): boolean;
  clearServiceLinkState(): GetEventsResponse;

  getEventCase(): GetEventsResponse.EventCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventsResponse): GetEventsResponse.AsObject;
  static serializeBinaryToWriter(message: GetEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventsResponse;
  static deserializeBinaryFromReader(message: GetEventsResponse, reader: jspb.BinaryReader): GetEventsResponse;
}

export namespace GetEventsResponse {
  export type AsObject = {
    node: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    flow?: flow_flow_pb.Flow.AsObject,
    k8sNamespaceState?: K8sNamespaceState.AsObject,
    serviceState?: ServiceState.AsObject,
    serviceLinkState?: ServiceLinkState.AsObject,
  }

  export enum EventCase { 
    EVENT_NOT_SET = 0,
    FLOW = 3,
    K8S_NAMESPACE_STATE = 4,
    SERVICE_STATE = 5,
    SERVICE_LINK_STATE = 6,
  }
}

export class EventFilter extends jspb.Message {
  getFlowFilter(): flow_flow_pb.FlowFilter | undefined;
  setFlowFilter(value?: flow_flow_pb.FlowFilter): EventFilter;
  hasFlowFilter(): boolean;
  clearFlowFilter(): EventFilter;

  getServiceFilter(): ServiceFilter | undefined;
  setServiceFilter(value?: ServiceFilter): EventFilter;
  hasServiceFilter(): boolean;
  clearServiceFilter(): EventFilter;

  getServiceLinkFilter(): ServiceLinkFilter | undefined;
  setServiceLinkFilter(value?: ServiceLinkFilter): EventFilter;
  hasServiceLinkFilter(): boolean;
  clearServiceLinkFilter(): EventFilter;

  getFilterCase(): EventFilter.FilterCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventFilter.AsObject;
  static toObject(includeInstance: boolean, msg: EventFilter): EventFilter.AsObject;
  static serializeBinaryToWriter(message: EventFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventFilter;
  static deserializeBinaryFromReader(message: EventFilter, reader: jspb.BinaryReader): EventFilter;
}

export namespace EventFilter {
  export type AsObject = {
    flowFilter?: flow_flow_pb.FlowFilter.AsObject,
    serviceFilter?: ServiceFilter.AsObject,
    serviceLinkFilter?: ServiceLinkFilter.AsObject,
  }

  export enum FilterCase { 
    FILTER_NOT_SET = 0,
    FLOW_FILTER = 2,
    SERVICE_FILTER = 3,
    SERVICE_LINK_FILTER = 4,
  }
}

export class K8sNamespace extends jspb.Message {
  getId(): string;
  setId(value: string): K8sNamespace;

  getName(): string;
  setName(value: string): K8sNamespace;

  getCreationTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): K8sNamespace;
  hasCreationTimestamp(): boolean;
  clearCreationTimestamp(): K8sNamespace;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): K8sNamespace.AsObject;
  static toObject(includeInstance: boolean, msg: K8sNamespace): K8sNamespace.AsObject;
  static serializeBinaryToWriter(message: K8sNamespace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): K8sNamespace;
  static deserializeBinaryFromReader(message: K8sNamespace, reader: jspb.BinaryReader): K8sNamespace;
}

export namespace K8sNamespace {
  export type AsObject = {
    id: string,
    name: string,
    creationTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class K8sNamespaceState extends jspb.Message {
  getNamespace(): K8sNamespace | undefined;
  setNamespace(value?: K8sNamespace): K8sNamespaceState;
  hasNamespace(): boolean;
  clearNamespace(): K8sNamespaceState;

  getType(): StateChange;
  setType(value: StateChange): K8sNamespaceState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): K8sNamespaceState.AsObject;
  static toObject(includeInstance: boolean, msg: K8sNamespaceState): K8sNamespaceState.AsObject;
  static serializeBinaryToWriter(message: K8sNamespaceState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): K8sNamespaceState;
  static deserializeBinaryFromReader(message: K8sNamespaceState, reader: jspb.BinaryReader): K8sNamespaceState;
}

export namespace K8sNamespaceState {
  export type AsObject = {
    namespace?: K8sNamespace.AsObject,
    type: StateChange,
  }
}

export class Service extends jspb.Message {
  getId(): string;
  setId(value: string): Service;

  getName(): string;
  setName(value: string): Service;

  getNamespace(): string;
  setNamespace(value: string): Service;

  getLabelsList(): Array<string>;
  setLabelsList(value: Array<string>): Service;
  clearLabelsList(): Service;
  addLabels(value: string, index?: number): Service;

  getDnsNamesList(): Array<string>;
  setDnsNamesList(value: Array<string>): Service;
  clearDnsNamesList(): Service;
  addDnsNames(value: string, index?: number): Service;

  getEgressPolicyEnforced(): boolean;
  setEgressPolicyEnforced(value: boolean): Service;

  getIngressPolicyEnforced(): boolean;
  setIngressPolicyEnforced(value: boolean): Service;

  getVisibilityPolicyStatus(): string;
  setVisibilityPolicyStatus(value: string): Service;

  getCreationTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Service;
  hasCreationTimestamp(): boolean;
  clearCreationTimestamp(): Service;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Service.AsObject;
  static toObject(includeInstance: boolean, msg: Service): Service.AsObject;
  static serializeBinaryToWriter(message: Service, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Service;
  static deserializeBinaryFromReader(message: Service, reader: jspb.BinaryReader): Service;
}

export namespace Service {
  export type AsObject = {
    id: string,
    name: string,
    namespace: string,
    labelsList: Array<string>,
    dnsNamesList: Array<string>,
    egressPolicyEnforced: boolean,
    ingressPolicyEnforced: boolean,
    visibilityPolicyStatus: string,
    creationTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ServiceState extends jspb.Message {
  getService(): Service | undefined;
  setService(value?: Service): ServiceState;
  hasService(): boolean;
  clearService(): ServiceState;

  getType(): StateChange;
  setType(value: StateChange): ServiceState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceState.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceState): ServiceState.AsObject;
  static serializeBinaryToWriter(message: ServiceState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceState;
  static deserializeBinaryFromReader(message: ServiceState, reader: jspb.BinaryReader): ServiceState;
}

export namespace ServiceState {
  export type AsObject = {
    service?: Service.AsObject,
    type: StateChange,
  }
}

export class ServiceFilter extends jspb.Message {
  getNamespaceList(): Array<string>;
  setNamespaceList(value: Array<string>): ServiceFilter;
  clearNamespaceList(): ServiceFilter;
  addNamespace(value: string, index?: number): ServiceFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceFilter): ServiceFilter.AsObject;
  static serializeBinaryToWriter(message: ServiceFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceFilter;
  static deserializeBinaryFromReader(message: ServiceFilter, reader: jspb.BinaryReader): ServiceFilter;
}

export namespace ServiceFilter {
  export type AsObject = {
    namespaceList: Array<string>,
  }
}

export class ServiceLink extends jspb.Message {
  getId(): string;
  setId(value: string): ServiceLink;

  getSourceId(): string;
  setSourceId(value: string): ServiceLink;

  getDestinationId(): string;
  setDestinationId(value: string): ServiceLink;

  getDestinationPort(): number;
  setDestinationPort(value: number): ServiceLink;

  getIpProtocol(): IPProtocol;
  setIpProtocol(value: IPProtocol): ServiceLink;

  getVerdict(): flow_flow_pb.Verdict;
  setVerdict(value: flow_flow_pb.Verdict): ServiceLink;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceLink.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceLink): ServiceLink.AsObject;
  static serializeBinaryToWriter(message: ServiceLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceLink;
  static deserializeBinaryFromReader(message: ServiceLink, reader: jspb.BinaryReader): ServiceLink;
}

export namespace ServiceLink {
  export type AsObject = {
    id: string,
    sourceId: string,
    destinationId: string,
    destinationPort: number,
    ipProtocol: IPProtocol,
    verdict: flow_flow_pb.Verdict,
  }
}

export class ServiceLinkState extends jspb.Message {
  getServiceLink(): ServiceLink | undefined;
  setServiceLink(value?: ServiceLink): ServiceLinkState;
  hasServiceLink(): boolean;
  clearServiceLink(): ServiceLinkState;

  getType(): StateChange;
  setType(value: StateChange): ServiceLinkState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceLinkState.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceLinkState): ServiceLinkState.AsObject;
  static serializeBinaryToWriter(message: ServiceLinkState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceLinkState;
  static deserializeBinaryFromReader(message: ServiceLinkState, reader: jspb.BinaryReader): ServiceLinkState;
}

export namespace ServiceLinkState {
  export type AsObject = {
    serviceLink?: ServiceLink.AsObject,
    type: StateChange,
  }
}

export class ServiceLinkFilter extends jspb.Message {
  getSourceList(): Array<ServiceFilter>;
  setSourceList(value: Array<ServiceFilter>): ServiceLinkFilter;
  clearSourceList(): ServiceLinkFilter;
  addSource(value?: ServiceFilter, index?: number): ServiceFilter;

  getDestinationList(): Array<ServiceFilter>;
  setDestinationList(value: Array<ServiceFilter>): ServiceLinkFilter;
  clearDestinationList(): ServiceLinkFilter;
  addDestination(value?: ServiceFilter, index?: number): ServiceFilter;

  getDestinationPortList(): Array<string>;
  setDestinationPortList(value: Array<string>): ServiceLinkFilter;
  clearDestinationPortList(): ServiceLinkFilter;
  addDestinationPort(value: string, index?: number): ServiceLinkFilter;

  getVerdictList(): Array<flow_flow_pb.Verdict>;
  setVerdictList(value: Array<flow_flow_pb.Verdict>): ServiceLinkFilter;
  clearVerdictList(): ServiceLinkFilter;
  addVerdict(value: flow_flow_pb.Verdict, index?: number): ServiceLinkFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceLinkFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceLinkFilter): ServiceLinkFilter.AsObject;
  static serializeBinaryToWriter(message: ServiceLinkFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceLinkFilter;
  static deserializeBinaryFromReader(message: ServiceLinkFilter, reader: jspb.BinaryReader): ServiceLinkFilter;
}

export namespace ServiceLinkFilter {
  export type AsObject = {
    sourceList: Array<ServiceFilter.AsObject>,
    destinationList: Array<ServiceFilter.AsObject>,
    destinationPortList: Array<string>,
    verdictList: Array<flow_flow_pb.Verdict>,
  }
}

export enum EventType { 
  UNKNOWN_EVENT = 0,
  FLOW = 1,
  K8S_NAMESPACE_STATE = 2,
  SERVICE_STATE = 3,
  SERVICE_LINK_STATE = 4,
}
export enum IPProtocol { 
  UNKNOWN_IP_PROTOCOL = 0,
  TCP = 1,
  UDP = 2,
  ICMP_V4 = 3,
  ICMP_V6 = 4,
}
export enum StateChange { 
  UNKNOWN_STATE_CHANGE = 0,
  ADDED = 1,
  MODIFIED = 2,
  DELETED = 3,
  EXISTS = 4,
}
