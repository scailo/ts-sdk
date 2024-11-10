[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobInwardItemProspectiveInfoRequest

# Class: OutwardJobInwardItemProspectiveInfoRequest

Describes the parameters that are required to retrieve the info of a prospective outward job inward item

**`Generated`**

from message Scailo.OutwardJobInwardItemProspectiveInfoRequest

## Hierarchy

- `Message`\<[`OutwardJobInwardItemProspectiveInfoRequest`](OutwardJobInwardItemProspectiveInfoRequest.md)\>

  ↳ **`OutwardJobInwardItemProspectiveInfoRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobInwardItemProspectiveInfoRequest.md#constructor)

### Properties

- [familyId](OutwardJobInwardItemProspectiveInfoRequest.md#familyid)
- [outwardJobId](OutwardJobInwardItemProspectiveInfoRequest.md#outwardjobid)
- [fields](OutwardJobInwardItemProspectiveInfoRequest.md#fields)
- [runtime](OutwardJobInwardItemProspectiveInfoRequest.md#runtime)
- [typeName](OutwardJobInwardItemProspectiveInfoRequest.md#typename)

### Methods

- [clone](OutwardJobInwardItemProspectiveInfoRequest.md#clone)
- [equals](OutwardJobInwardItemProspectiveInfoRequest.md#equals)
- [fromBinary](OutwardJobInwardItemProspectiveInfoRequest.md#frombinary)
- [fromJson](OutwardJobInwardItemProspectiveInfoRequest.md#fromjson)
- [fromJsonString](OutwardJobInwardItemProspectiveInfoRequest.md#fromjsonstring)
- [getType](OutwardJobInwardItemProspectiveInfoRequest.md#gettype)
- [toBinary](OutwardJobInwardItemProspectiveInfoRequest.md#tobinary)
- [toJSON](OutwardJobInwardItemProspectiveInfoRequest.md#tojson)
- [toJson](OutwardJobInwardItemProspectiveInfoRequest.md#tojson-1)
- [toJsonString](OutwardJobInwardItemProspectiveInfoRequest.md#tojsonstring)
- [equals](OutwardJobInwardItemProspectiveInfoRequest.md#equals-1)
- [fromBinary](OutwardJobInwardItemProspectiveInfoRequest.md#frombinary-1)
- [fromJson](OutwardJobInwardItemProspectiveInfoRequest.md#fromjson-1)
- [fromJsonString](OutwardJobInwardItemProspectiveInfoRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobInwardItemProspectiveInfoRequest**(`data?`): [`OutwardJobInwardItemProspectiveInfoRequest`](OutwardJobInwardItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobInwardItemProspectiveInfoRequest`](OutwardJobInwardItemProspectiveInfoRequest.md)\> |

#### Returns

[`OutwardJobInwardItemProspectiveInfoRequest`](OutwardJobInwardItemProspectiveInfoRequest.md)

#### Overrides

Message\&lt;OutwardJobInwardItemProspectiveInfoRequest\&gt;.constructor

#### Defined in

src/outward_jobs.scailo_pb.ts:1356

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/outward_jobs.scailo_pb.ts:1354

___

### outwardJobId

• **outwardJobId**: `bigint` = `protoInt64.zero`

Stores the outward job ID

**`Generated`**

from field: uint64 outward_job_id = 10;

#### Defined in

src/outward_jobs.scailo_pb.ts:1347

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs.scailo_pb.ts:1363

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs.scailo_pb.ts:1361

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobInwardItemProspectiveInfoRequest"``

#### Defined in

src/outward_jobs.scailo_pb.ts:1362

## Methods

### clone

▸ **clone**(): [`OutwardJobInwardItemProspectiveInfoRequest`](OutwardJobInwardItemProspectiveInfoRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobInwardItemProspectiveInfoRequest`](OutwardJobInwardItemProspectiveInfoRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobInwardItemProspectiveInfoRequest`](OutwardJobInwardItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`OutwardJobInwardItemProspectiveInfoRequest`](OutwardJobInwardItemProspectiveInfoRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobInwardItemProspectiveInfoRequest`](OutwardJobInwardItemProspectiveInfoRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobInwardItemProspectiveInfoRequest`](OutwardJobInwardItemProspectiveInfoRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobInwardItemProspectiveInfoRequest`](OutwardJobInwardItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`OutwardJobInwardItemProspectiveInfoRequest`](OutwardJobInwardItemProspectiveInfoRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobInwardItemProspectiveInfoRequest`](OutwardJobInwardItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`OutwardJobInwardItemProspectiveInfoRequest`](OutwardJobInwardItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs.scailo_pb.ts:1380

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobInwardItemProspectiveInfoRequest`](OutwardJobInwardItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobInwardItemProspectiveInfoRequest`](OutwardJobInwardItemProspectiveInfoRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:1368

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobInwardItemProspectiveInfoRequest`](OutwardJobInwardItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobInwardItemProspectiveInfoRequest`](OutwardJobInwardItemProspectiveInfoRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:1372

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobInwardItemProspectiveInfoRequest`](OutwardJobInwardItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobInwardItemProspectiveInfoRequest`](OutwardJobInwardItemProspectiveInfoRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:1376
