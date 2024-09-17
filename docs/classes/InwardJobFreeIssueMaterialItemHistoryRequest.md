[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobFreeIssueMaterialItemHistoryRequest

# Class: InwardJobFreeIssueMaterialItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.InwardJobFreeIssueMaterialItemHistoryRequest

## Hierarchy

- `Message`\<[`InwardJobFreeIssueMaterialItemHistoryRequest`](InwardJobFreeIssueMaterialItemHistoryRequest.md)\>

  ↳ **`InwardJobFreeIssueMaterialItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](InwardJobFreeIssueMaterialItemHistoryRequest.md#constructor)

### Properties

- [familyId](InwardJobFreeIssueMaterialItemHistoryRequest.md#familyid)
- [inwardJobFreeIssueMaterialId](InwardJobFreeIssueMaterialItemHistoryRequest.md#inwardjobfreeissuematerialid)
- [fields](InwardJobFreeIssueMaterialItemHistoryRequest.md#fields)
- [runtime](InwardJobFreeIssueMaterialItemHistoryRequest.md#runtime)
- [typeName](InwardJobFreeIssueMaterialItemHistoryRequest.md#typename)

### Methods

- [clone](InwardJobFreeIssueMaterialItemHistoryRequest.md#clone)
- [equals](InwardJobFreeIssueMaterialItemHistoryRequest.md#equals)
- [fromBinary](InwardJobFreeIssueMaterialItemHistoryRequest.md#frombinary)
- [fromJson](InwardJobFreeIssueMaterialItemHistoryRequest.md#fromjson)
- [fromJsonString](InwardJobFreeIssueMaterialItemHistoryRequest.md#fromjsonstring)
- [getType](InwardJobFreeIssueMaterialItemHistoryRequest.md#gettype)
- [toBinary](InwardJobFreeIssueMaterialItemHistoryRequest.md#tobinary)
- [toJSON](InwardJobFreeIssueMaterialItemHistoryRequest.md#tojson)
- [toJson](InwardJobFreeIssueMaterialItemHistoryRequest.md#tojson-1)
- [toJsonString](InwardJobFreeIssueMaterialItemHistoryRequest.md#tojsonstring)
- [equals](InwardJobFreeIssueMaterialItemHistoryRequest.md#equals-1)
- [fromBinary](InwardJobFreeIssueMaterialItemHistoryRequest.md#frombinary-1)
- [fromJson](InwardJobFreeIssueMaterialItemHistoryRequest.md#fromjson-1)
- [fromJsonString](InwardJobFreeIssueMaterialItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobFreeIssueMaterialItemHistoryRequest**(`data?`): [`InwardJobFreeIssueMaterialItemHistoryRequest`](InwardJobFreeIssueMaterialItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobFreeIssueMaterialItemHistoryRequest`](InwardJobFreeIssueMaterialItemHistoryRequest.md)\> |

#### Returns

[`InwardJobFreeIssueMaterialItemHistoryRequest`](InwardJobFreeIssueMaterialItemHistoryRequest.md)

#### Overrides

Message\&lt;InwardJobFreeIssueMaterialItemHistoryRequest\&gt;.constructor

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:987

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:985

___

### inwardJobFreeIssueMaterialId

• **inwardJobFreeIssueMaterialId**: `bigint` = `protoInt64.zero`

Stores the inward job free issue material ID

**`Generated`**

from field: uint64 inward_job_free_issue_material_id = 10;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:978

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:994

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:992

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobFreeIssueMaterialItemHistoryRequest"``

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:993

## Methods

### clone

▸ **clone**(): [`InwardJobFreeIssueMaterialItemHistoryRequest`](InwardJobFreeIssueMaterialItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`InwardJobFreeIssueMaterialItemHistoryRequest`](InwardJobFreeIssueMaterialItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobFreeIssueMaterialItemHistoryRequest`](InwardJobFreeIssueMaterialItemHistoryRequest.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialItemHistoryRequest`](InwardJobFreeIssueMaterialItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobFreeIssueMaterialItemHistoryRequest`](InwardJobFreeIssueMaterialItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobFreeIssueMaterialItemHistoryRequest`](InwardJobFreeIssueMaterialItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`InwardJobFreeIssueMaterialItemHistoryRequest`](InwardJobFreeIssueMaterialItemHistoryRequest.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialItemHistoryRequest`](InwardJobFreeIssueMaterialItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`InwardJobFreeIssueMaterialItemHistoryRequest`](InwardJobFreeIssueMaterialItemHistoryRequest.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialItemHistoryRequest`](InwardJobFreeIssueMaterialItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1011

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobFreeIssueMaterialItemHistoryRequest`](InwardJobFreeIssueMaterialItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialItemHistoryRequest`](InwardJobFreeIssueMaterialItemHistoryRequest.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:999

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobFreeIssueMaterialItemHistoryRequest`](InwardJobFreeIssueMaterialItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialItemHistoryRequest`](InwardJobFreeIssueMaterialItemHistoryRequest.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1003

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobFreeIssueMaterialItemHistoryRequest`](InwardJobFreeIssueMaterialItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialItemHistoryRequest`](InwardJobFreeIssueMaterialItemHistoryRequest.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1007
