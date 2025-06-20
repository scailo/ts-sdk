[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobOutwardItemProspectiveInfoRequest

# Class: OutwardJobOutwardItemProspectiveInfoRequest

Describes the parameters that are required to retrieve the info of a prospective outward job outward item

**`Generated`**

from message Scailo.OutwardJobOutwardItemProspectiveInfoRequest

## Hierarchy

- `Message`\<[`OutwardJobOutwardItemProspectiveInfoRequest`](OutwardJobOutwardItemProspectiveInfoRequest.md)\>

  ↳ **`OutwardJobOutwardItemProspectiveInfoRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobOutwardItemProspectiveInfoRequest.md#constructor)

### Properties

- [familyId](OutwardJobOutwardItemProspectiveInfoRequest.md#familyid)
- [outwardJobId](OutwardJobOutwardItemProspectiveInfoRequest.md#outwardjobid)
- [fields](OutwardJobOutwardItemProspectiveInfoRequest.md#fields)
- [runtime](OutwardJobOutwardItemProspectiveInfoRequest.md#runtime)
- [typeName](OutwardJobOutwardItemProspectiveInfoRequest.md#typename)

### Methods

- [clone](OutwardJobOutwardItemProspectiveInfoRequest.md#clone)
- [equals](OutwardJobOutwardItemProspectiveInfoRequest.md#equals)
- [fromBinary](OutwardJobOutwardItemProspectiveInfoRequest.md#frombinary)
- [fromJson](OutwardJobOutwardItemProspectiveInfoRequest.md#fromjson)
- [fromJsonString](OutwardJobOutwardItemProspectiveInfoRequest.md#fromjsonstring)
- [getType](OutwardJobOutwardItemProspectiveInfoRequest.md#gettype)
- [toBinary](OutwardJobOutwardItemProspectiveInfoRequest.md#tobinary)
- [toJSON](OutwardJobOutwardItemProspectiveInfoRequest.md#tojson)
- [toJson](OutwardJobOutwardItemProspectiveInfoRequest.md#tojson-1)
- [toJsonString](OutwardJobOutwardItemProspectiveInfoRequest.md#tojsonstring)
- [equals](OutwardJobOutwardItemProspectiveInfoRequest.md#equals-1)
- [fromBinary](OutwardJobOutwardItemProspectiveInfoRequest.md#frombinary-1)
- [fromJson](OutwardJobOutwardItemProspectiveInfoRequest.md#fromjson-1)
- [fromJsonString](OutwardJobOutwardItemProspectiveInfoRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobOutwardItemProspectiveInfoRequest**(`data?`): [`OutwardJobOutwardItemProspectiveInfoRequest`](OutwardJobOutwardItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobOutwardItemProspectiveInfoRequest`](OutwardJobOutwardItemProspectiveInfoRequest.md)\> |

#### Returns

[`OutwardJobOutwardItemProspectiveInfoRequest`](OutwardJobOutwardItemProspectiveInfoRequest.md)

#### Overrides

Message\&lt;OutwardJobOutwardItemProspectiveInfoRequest\&gt;.constructor

#### Defined in

src/outward_jobs.scailo_pb.ts:2897

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/outward_jobs.scailo_pb.ts:2895

___

### outwardJobId

• **outwardJobId**: `bigint` = `protoInt64.zero`

Stores the outward job ID

**`Generated`**

from field: uint64 outward_job_id = 10;

#### Defined in

src/outward_jobs.scailo_pb.ts:2888

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs.scailo_pb.ts:2904

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs.scailo_pb.ts:2902

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobOutwardItemProspectiveInfoRequest"``

#### Defined in

src/outward_jobs.scailo_pb.ts:2903

## Methods

### clone

▸ **clone**(): [`OutwardJobOutwardItemProspectiveInfoRequest`](OutwardJobOutwardItemProspectiveInfoRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobOutwardItemProspectiveInfoRequest`](OutwardJobOutwardItemProspectiveInfoRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobOutwardItemProspectiveInfoRequest`](OutwardJobOutwardItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`OutwardJobOutwardItemProspectiveInfoRequest`](OutwardJobOutwardItemProspectiveInfoRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobOutwardItemProspectiveInfoRequest`](OutwardJobOutwardItemProspectiveInfoRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobOutwardItemProspectiveInfoRequest`](OutwardJobOutwardItemProspectiveInfoRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobOutwardItemProspectiveInfoRequest`](OutwardJobOutwardItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`OutwardJobOutwardItemProspectiveInfoRequest`](OutwardJobOutwardItemProspectiveInfoRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobOutwardItemProspectiveInfoRequest`](OutwardJobOutwardItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`OutwardJobOutwardItemProspectiveInfoRequest`](OutwardJobOutwardItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs.scailo_pb.ts:2921

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobOutwardItemProspectiveInfoRequest`](OutwardJobOutwardItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobOutwardItemProspectiveInfoRequest`](OutwardJobOutwardItemProspectiveInfoRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:2909

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobOutwardItemProspectiveInfoRequest`](OutwardJobOutwardItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobOutwardItemProspectiveInfoRequest`](OutwardJobOutwardItemProspectiveInfoRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:2913

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobOutwardItemProspectiveInfoRequest`](OutwardJobOutwardItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobOutwardItemProspectiveInfoRequest`](OutwardJobOutwardItemProspectiveInfoRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:2917
