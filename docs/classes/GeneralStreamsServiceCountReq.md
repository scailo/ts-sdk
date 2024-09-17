[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GeneralStreamsServiceCountReq

# Class: GeneralStreamsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.GeneralStreamsServiceCountReq

## Hierarchy

- `Message`\<[`GeneralStreamsServiceCountReq`](GeneralStreamsServiceCountReq.md)\>

  ↳ **`GeneralStreamsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](GeneralStreamsServiceCountReq.md#constructor)

### Properties

- [completedOnEnd](GeneralStreamsServiceCountReq.md#completedonend)
- [completedOnStart](GeneralStreamsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](GeneralStreamsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](GeneralStreamsServiceCountReq.md#creationtimestampstart)
- [entityUuid](GeneralStreamsServiceCountReq.md#entityuuid)
- [internalRef](GeneralStreamsServiceCountReq.md#internalref)
- [internalSubscriberUserId](GeneralStreamsServiceCountReq.md#internalsubscriberuserid)
- [isActive](GeneralStreamsServiceCountReq.md#isactive)
- [modificationTimestampEnd](GeneralStreamsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](GeneralStreamsServiceCountReq.md#modificationtimestampstart)
- [status](GeneralStreamsServiceCountReq.md#status)
- [title](GeneralStreamsServiceCountReq.md#title)
- [fields](GeneralStreamsServiceCountReq.md#fields)
- [runtime](GeneralStreamsServiceCountReq.md#runtime)
- [typeName](GeneralStreamsServiceCountReq.md#typename)

### Methods

- [clone](GeneralStreamsServiceCountReq.md#clone)
- [equals](GeneralStreamsServiceCountReq.md#equals)
- [fromBinary](GeneralStreamsServiceCountReq.md#frombinary)
- [fromJson](GeneralStreamsServiceCountReq.md#fromjson)
- [fromJsonString](GeneralStreamsServiceCountReq.md#fromjsonstring)
- [getType](GeneralStreamsServiceCountReq.md#gettype)
- [toBinary](GeneralStreamsServiceCountReq.md#tobinary)
- [toJSON](GeneralStreamsServiceCountReq.md#tojson)
- [toJson](GeneralStreamsServiceCountReq.md#tojson-1)
- [toJsonString](GeneralStreamsServiceCountReq.md#tojsonstring)
- [equals](GeneralStreamsServiceCountReq.md#equals-1)
- [fromBinary](GeneralStreamsServiceCountReq.md#frombinary-1)
- [fromJson](GeneralStreamsServiceCountReq.md#fromjson-1)
- [fromJsonString](GeneralStreamsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GeneralStreamsServiceCountReq**(`data?`): [`GeneralStreamsServiceCountReq`](GeneralStreamsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GeneralStreamsServiceCountReq`](GeneralStreamsServiceCountReq.md)\> |

#### Returns

[`GeneralStreamsServiceCountReq`](GeneralStreamsServiceCountReq.md)

#### Overrides

Message\&lt;GeneralStreamsServiceCountReq\&gt;.constructor

#### Defined in

src/generalstreams.scailo_pb.ts:1001

## Properties

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/generalstreams.scailo_pb.ts:978

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/generalstreams.scailo_pb.ts:971

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/generalstreams.scailo_pb.ts:936

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/generalstreams.scailo_pb.ts:929

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/generalstreams.scailo_pb.ts:957

___

### internalRef

• **internalRef**: `string` = `""`

Stores the internal reference that is automatically generated

**`Generated`**

from field: string internal_ref = 18;

#### Defined in

src/generalstreams.scailo_pb.ts:985

___

### internalSubscriberUserId

• **internalSubscriberUserId**: `bigint` = `protoInt64.zero`

Filter by the associated internal subscriber user ID

**`Generated`**

from field: uint64 internal_subscriber_user_id = 60;

#### Defined in

src/generalstreams.scailo_pb.ts:999

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/generalstreams.scailo_pb.ts:922

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/generalstreams.scailo_pb.ts:950

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/generalstreams.scailo_pb.ts:943

___

### status

• **status**: [`GENERAL_STREAM_LIFECYCLE`](../enums/GENERAL_STREAM_LIFECYCLE.md) = `GENERAL_STREAM_LIFECYCLE.GENERAL_STREAM_LIFECYCLE_ANY_UNSPECIFIED`

The status of this general stream

**`Generated`**

from field: Scailo.GENERAL_STREAM_LIFECYCLE status = 10;

#### Defined in

src/generalstreams.scailo_pb.ts:964

___

### title

• **title**: `string` = `""`

The title of the general stream

**`Generated`**

from field: string title = 30;

#### Defined in

src/generalstreams.scailo_pb.ts:992

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/generalstreams.scailo_pb.ts:1008

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/generalstreams.scailo_pb.ts:1006

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GeneralStreamsServiceCountReq"``

#### Defined in

src/generalstreams.scailo_pb.ts:1007

## Methods

### clone

▸ **clone**(): [`GeneralStreamsServiceCountReq`](GeneralStreamsServiceCountReq.md)

Create a deep copy.

#### Returns

[`GeneralStreamsServiceCountReq`](GeneralStreamsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GeneralStreamsServiceCountReq`](GeneralStreamsServiceCountReq.md) \| `PlainMessage`\<[`GeneralStreamsServiceCountReq`](GeneralStreamsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`GeneralStreamsServiceCountReq`](GeneralStreamsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GeneralStreamsServiceCountReq`](GeneralStreamsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`GeneralStreamsServiceCountReq`](GeneralStreamsServiceCountReq.md) \| `PlainMessage`\<[`GeneralStreamsServiceCountReq`](GeneralStreamsServiceCountReq.md)\> |
| `b` | `undefined` \| [`GeneralStreamsServiceCountReq`](GeneralStreamsServiceCountReq.md) \| `PlainMessage`\<[`GeneralStreamsServiceCountReq`](GeneralStreamsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/generalstreams.scailo_pb.ts:1035

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GeneralStreamsServiceCountReq`](GeneralStreamsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GeneralStreamsServiceCountReq`](GeneralStreamsServiceCountReq.md)

#### Defined in

src/generalstreams.scailo_pb.ts:1023

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GeneralStreamsServiceCountReq`](GeneralStreamsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamsServiceCountReq`](GeneralStreamsServiceCountReq.md)

#### Defined in

src/generalstreams.scailo_pb.ts:1027

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GeneralStreamsServiceCountReq`](GeneralStreamsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamsServiceCountReq`](GeneralStreamsServiceCountReq.md)

#### Defined in

src/generalstreams.scailo_pb.ts:1031
