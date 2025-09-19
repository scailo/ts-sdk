[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorStreamsServiceCountReq

# Class: VendorStreamsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.VendorStreamsServiceCountReq

## Hierarchy

- `Message`\<[`VendorStreamsServiceCountReq`](VendorStreamsServiceCountReq.md)\>

  ↳ **`VendorStreamsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](VendorStreamsServiceCountReq.md#constructor)

### Properties

- [completedOnEnd](VendorStreamsServiceCountReq.md#completedonend)
- [completedOnStart](VendorStreamsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](VendorStreamsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](VendorStreamsServiceCountReq.md#creationtimestampstart)
- [entityUuid](VendorStreamsServiceCountReq.md#entityuuid)
- [internalRef](VendorStreamsServiceCountReq.md#internalref)
- [internalSubscriberUserId](VendorStreamsServiceCountReq.md#internalsubscriberuserid)
- [isActive](VendorStreamsServiceCountReq.md#isactive)
- [modificationTimestampEnd](VendorStreamsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](VendorStreamsServiceCountReq.md#modificationtimestampstart)
- [refFrom](VendorStreamsServiceCountReq.md#reffrom)
- [refId](VendorStreamsServiceCountReq.md#refid)
- [status](VendorStreamsServiceCountReq.md#status)
- [title](VendorStreamsServiceCountReq.md#title)
- [vendorId](VendorStreamsServiceCountReq.md#vendorid)
- [vendorSubscriberUserId](VendorStreamsServiceCountReq.md#vendorsubscriberuserid)
- [fields](VendorStreamsServiceCountReq.md#fields)
- [runtime](VendorStreamsServiceCountReq.md#runtime)
- [typeName](VendorStreamsServiceCountReq.md#typename)

### Methods

- [clone](VendorStreamsServiceCountReq.md#clone)
- [equals](VendorStreamsServiceCountReq.md#equals)
- [fromBinary](VendorStreamsServiceCountReq.md#frombinary)
- [fromJson](VendorStreamsServiceCountReq.md#fromjson)
- [fromJsonString](VendorStreamsServiceCountReq.md#fromjsonstring)
- [getType](VendorStreamsServiceCountReq.md#gettype)
- [toBinary](VendorStreamsServiceCountReq.md#tobinary)
- [toJSON](VendorStreamsServiceCountReq.md#tojson)
- [toJson](VendorStreamsServiceCountReq.md#tojson-1)
- [toJsonString](VendorStreamsServiceCountReq.md#tojsonstring)
- [equals](VendorStreamsServiceCountReq.md#equals-1)
- [fromBinary](VendorStreamsServiceCountReq.md#frombinary-1)
- [fromJson](VendorStreamsServiceCountReq.md#fromjson-1)
- [fromJsonString](VendorStreamsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorStreamsServiceCountReq**(`data?`): [`VendorStreamsServiceCountReq`](VendorStreamsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorStreamsServiceCountReq`](VendorStreamsServiceCountReq.md)\> |

#### Returns

[`VendorStreamsServiceCountReq`](VendorStreamsServiceCountReq.md)

#### Overrides

Message\&lt;VendorStreamsServiceCountReq\&gt;.constructor

#### Defined in

[src/vendor_streams.scailo_pb.ts:1214](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1214)

## Properties

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1160](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1160)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1153](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1153)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1118](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1118)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1111](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1111)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1139](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1139)

___

### internalRef

• **internalRef**: `string` = `""`

Stores the internal reference that is automatically generated

**`Generated`**

from field: string internal_ref = 18;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1167](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1167)

___

### internalSubscriberUserId

• **internalSubscriberUserId**: `bigint` = `protoInt64.zero`

Filter by the associated internal subscriber user ID

**`Generated`**

from field: uint64 internal_subscriber_user_id = 60;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1205](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1205)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1104](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1104)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1132](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1132)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1125](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1125)

___

### refFrom

• **refFrom**: [`VENDOR_STREAM_REF_FROM`](../enums/VENDOR_STREAM_REF_FROM.md) = `VENDOR_STREAM_REF_FROM.VENDOR_STREAM_REF_FROM_ANY_UNSPECIFIED`

Filter by the associated reference

**`Generated`**

from field: Scailo.VENDOR_STREAM_REF_FROM ref_from = 41;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1189](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1189)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Filter by the associated reference ID

------------------------------------------------

**`Generated`**

from field: uint64 ref_id = 42;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1198](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1198)

___

### status

• **status**: [`VENDOR_STREAM_LIFECYCLE`](../enums/VENDOR_STREAM_LIFECYCLE.md) = `VENDOR_STREAM_LIFECYCLE.VENDOR_STREAM_LIFECYCLE_ANY_UNSPECIFIED`

The status of this vendor stream

**`Generated`**

from field: Scailo.VENDOR_STREAM_LIFECYCLE status = 10;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1146](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1146)

___

### title

• **title**: `string` = `""`

The title of the vendor stream

**`Generated`**

from field: string title = 30;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1174](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1174)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

------------------------------------------------
Filter by the associated vendor ID

**`Generated`**

from field: uint64 vendor_id = 40;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1182](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1182)

___

### vendorSubscriberUserId

• **vendorSubscriberUserId**: `bigint` = `protoInt64.zero`

Filter by the associated vendor subscriber user ID

**`Generated`**

from field: uint64 vendor_subscriber_user_id = 61;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1212](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1212)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendor_streams.scailo_pb.ts:1221](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1221)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendor_streams.scailo_pb.ts:1219](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1219)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorStreamsServiceCountReq"``

#### Defined in

[src/vendor_streams.scailo_pb.ts:1220](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1220)

## Methods

### clone

▸ **clone**(): [`VendorStreamsServiceCountReq`](VendorStreamsServiceCountReq.md)

Create a deep copy.

#### Returns

[`VendorStreamsServiceCountReq`](VendorStreamsServiceCountReq.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`VendorStreamsServiceCountReq`](VendorStreamsServiceCountReq.md) \| `PlainMessage`\<[`VendorStreamsServiceCountReq`](VendorStreamsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`VendorStreamsServiceCountReq`](VendorStreamsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorStreamsServiceCountReq`](VendorStreamsServiceCountReq.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`VendorStreamsServiceCountReq`](VendorStreamsServiceCountReq.md) \| `PlainMessage`\<[`VendorStreamsServiceCountReq`](VendorStreamsServiceCountReq.md)\> |
| `b` | `undefined` \| [`VendorStreamsServiceCountReq`](VendorStreamsServiceCountReq.md) \| `PlainMessage`\<[`VendorStreamsServiceCountReq`](VendorStreamsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendor_streams.scailo_pb.ts:1252](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1252)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorStreamsServiceCountReq`](VendorStreamsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorStreamsServiceCountReq`](VendorStreamsServiceCountReq.md)

#### Defined in

[src/vendor_streams.scailo_pb.ts:1240](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1240)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorStreamsServiceCountReq`](VendorStreamsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsServiceCountReq`](VendorStreamsServiceCountReq.md)

#### Defined in

[src/vendor_streams.scailo_pb.ts:1244](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1244)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorStreamsServiceCountReq`](VendorStreamsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsServiceCountReq`](VendorStreamsServiceCountReq.md)

#### Defined in

[src/vendor_streams.scailo_pb.ts:1248](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1248)
