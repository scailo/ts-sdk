[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobOutwardItemProspectiveInfoRequest

# Class: InwardJobOutwardItemProspectiveInfoRequest

Describes the parameters that are required to retrieve the info of a prospective inward job outward item

**`Generated`**

from message Scailo.InwardJobOutwardItemProspectiveInfoRequest

## Hierarchy

- `Message`\<[`InwardJobOutwardItemProspectiveInfoRequest`](InwardJobOutwardItemProspectiveInfoRequest.md)\>

  ↳ **`InwardJobOutwardItemProspectiveInfoRequest`**

## Table of contents

### Constructors

- [constructor](InwardJobOutwardItemProspectiveInfoRequest.md#constructor)

### Properties

- [familyId](InwardJobOutwardItemProspectiveInfoRequest.md#familyid)
- [inwardJobId](InwardJobOutwardItemProspectiveInfoRequest.md#inwardjobid)
- [fields](InwardJobOutwardItemProspectiveInfoRequest.md#fields)
- [runtime](InwardJobOutwardItemProspectiveInfoRequest.md#runtime)
- [typeName](InwardJobOutwardItemProspectiveInfoRequest.md#typename)

### Methods

- [clone](InwardJobOutwardItemProspectiveInfoRequest.md#clone)
- [equals](InwardJobOutwardItemProspectiveInfoRequest.md#equals)
- [fromBinary](InwardJobOutwardItemProspectiveInfoRequest.md#frombinary)
- [fromJson](InwardJobOutwardItemProspectiveInfoRequest.md#fromjson)
- [fromJsonString](InwardJobOutwardItemProspectiveInfoRequest.md#fromjsonstring)
- [getType](InwardJobOutwardItemProspectiveInfoRequest.md#gettype)
- [toBinary](InwardJobOutwardItemProspectiveInfoRequest.md#tobinary)
- [toJSON](InwardJobOutwardItemProspectiveInfoRequest.md#tojson)
- [toJson](InwardJobOutwardItemProspectiveInfoRequest.md#tojson-1)
- [toJsonString](InwardJobOutwardItemProspectiveInfoRequest.md#tojsonstring)
- [equals](InwardJobOutwardItemProspectiveInfoRequest.md#equals-1)
- [fromBinary](InwardJobOutwardItemProspectiveInfoRequest.md#frombinary-1)
- [fromJson](InwardJobOutwardItemProspectiveInfoRequest.md#fromjson-1)
- [fromJsonString](InwardJobOutwardItemProspectiveInfoRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobOutwardItemProspectiveInfoRequest**(`data?`): [`InwardJobOutwardItemProspectiveInfoRequest`](InwardJobOutwardItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobOutwardItemProspectiveInfoRequest`](InwardJobOutwardItemProspectiveInfoRequest.md)\> |

#### Returns

[`InwardJobOutwardItemProspectiveInfoRequest`](InwardJobOutwardItemProspectiveInfoRequest.md)

#### Overrides

Message\&lt;InwardJobOutwardItemProspectiveInfoRequest\&gt;.constructor

#### Defined in

src/inward_jobs.scailo_pb.ts:3131

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/inward_jobs.scailo_pb.ts:3129

___

### inwardJobId

• **inwardJobId**: `bigint` = `protoInt64.zero`

Stores the inward job ID

**`Generated`**

from field: uint64 inward_job_id = 10;

#### Defined in

src/inward_jobs.scailo_pb.ts:3122

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs.scailo_pb.ts:3138

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs.scailo_pb.ts:3136

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobOutwardItemProspectiveInfoRequest"``

#### Defined in

src/inward_jobs.scailo_pb.ts:3137

## Methods

### clone

▸ **clone**(): [`InwardJobOutwardItemProspectiveInfoRequest`](InwardJobOutwardItemProspectiveInfoRequest.md)

Create a deep copy.

#### Returns

[`InwardJobOutwardItemProspectiveInfoRequest`](InwardJobOutwardItemProspectiveInfoRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobOutwardItemProspectiveInfoRequest`](InwardJobOutwardItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`InwardJobOutwardItemProspectiveInfoRequest`](InwardJobOutwardItemProspectiveInfoRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobOutwardItemProspectiveInfoRequest`](InwardJobOutwardItemProspectiveInfoRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobOutwardItemProspectiveInfoRequest`](InwardJobOutwardItemProspectiveInfoRequest.md)\>

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
| `a` | `undefined` \| [`InwardJobOutwardItemProspectiveInfoRequest`](InwardJobOutwardItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`InwardJobOutwardItemProspectiveInfoRequest`](InwardJobOutwardItemProspectiveInfoRequest.md)\> |
| `b` | `undefined` \| [`InwardJobOutwardItemProspectiveInfoRequest`](InwardJobOutwardItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`InwardJobOutwardItemProspectiveInfoRequest`](InwardJobOutwardItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs.scailo_pb.ts:3155

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobOutwardItemProspectiveInfoRequest`](InwardJobOutwardItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobOutwardItemProspectiveInfoRequest`](InwardJobOutwardItemProspectiveInfoRequest.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:3143

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobOutwardItemProspectiveInfoRequest`](InwardJobOutwardItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobOutwardItemProspectiveInfoRequest`](InwardJobOutwardItemProspectiveInfoRequest.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:3147

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobOutwardItemProspectiveInfoRequest`](InwardJobOutwardItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobOutwardItemProspectiveInfoRequest`](InwardJobOutwardItemProspectiveInfoRequest.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:3151
