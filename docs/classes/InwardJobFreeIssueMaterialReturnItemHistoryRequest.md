[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobFreeIssueMaterialReturnItemHistoryRequest

# Class: InwardJobFreeIssueMaterialReturnItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.InwardJobFreeIssueMaterialReturnItemHistoryRequest

## Hierarchy

- `Message`\<[`InwardJobFreeIssueMaterialReturnItemHistoryRequest`](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md)\>

  ↳ **`InwardJobFreeIssueMaterialReturnItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md#constructor)

### Properties

- [familyId](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md#familyid)
- [inwardJobFreeIssueMaterialReturnId](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md#inwardjobfreeissuematerialreturnid)
- [fields](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md#fields)
- [runtime](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md#runtime)
- [typeName](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md#typename)

### Methods

- [clone](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md#clone)
- [equals](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md#equals)
- [fromBinary](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md#frombinary)
- [fromJson](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md#fromjson)
- [fromJsonString](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md#fromjsonstring)
- [getType](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md#gettype)
- [toBinary](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md#tobinary)
- [toJSON](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md#tojson)
- [toJson](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md#tojson-1)
- [toJsonString](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md#tojsonstring)
- [equals](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md#equals-1)
- [fromBinary](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md#frombinary-1)
- [fromJson](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md#fromjson-1)
- [fromJsonString](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobFreeIssueMaterialReturnItemHistoryRequest**(`data?`): [`InwardJobFreeIssueMaterialReturnItemHistoryRequest`](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobFreeIssueMaterialReturnItemHistoryRequest`](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md)\> |

#### Returns

[`InwardJobFreeIssueMaterialReturnItemHistoryRequest`](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md)

#### Overrides

Message\&lt;InwardJobFreeIssueMaterialReturnItemHistoryRequest\&gt;.constructor

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1054

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1052

___

### inwardJobFreeIssueMaterialReturnId

• **inwardJobFreeIssueMaterialReturnId**: `bigint` = `protoInt64.zero`

Stores the inward job free issue material return ID

**`Generated`**

from field: uint64 inward_job_free_issue_material_return_id = 10;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1045

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1061

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1059

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobFreeIssueMaterialReturnItemHistoryRequest"``

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1060

## Methods

### clone

▸ **clone**(): [`InwardJobFreeIssueMaterialReturnItemHistoryRequest`](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`InwardJobFreeIssueMaterialReturnItemHistoryRequest`](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobFreeIssueMaterialReturnItemHistoryRequest`](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialReturnItemHistoryRequest`](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobFreeIssueMaterialReturnItemHistoryRequest`](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobFreeIssueMaterialReturnItemHistoryRequest`](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`InwardJobFreeIssueMaterialReturnItemHistoryRequest`](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialReturnItemHistoryRequest`](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`InwardJobFreeIssueMaterialReturnItemHistoryRequest`](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialReturnItemHistoryRequest`](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1078

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobFreeIssueMaterialReturnItemHistoryRequest`](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialReturnItemHistoryRequest`](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md)

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1066

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobFreeIssueMaterialReturnItemHistoryRequest`](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialReturnItemHistoryRequest`](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md)

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1070

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobFreeIssueMaterialReturnItemHistoryRequest`](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialReturnItemHistoryRequest`](InwardJobFreeIssueMaterialReturnItemHistoryRequest.md)

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1074
