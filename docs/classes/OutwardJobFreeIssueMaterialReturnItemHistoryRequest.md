[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobFreeIssueMaterialReturnItemHistoryRequest

# Class: OutwardJobFreeIssueMaterialReturnItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.OutwardJobFreeIssueMaterialReturnItemHistoryRequest

## Hierarchy

- `Message`\<[`OutwardJobFreeIssueMaterialReturnItemHistoryRequest`](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md)\>

  ↳ **`OutwardJobFreeIssueMaterialReturnItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md#constructor)

### Properties

- [familyId](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md#familyid)
- [outwardJobFreeIssueMaterialReturnId](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md#outwardjobfreeissuematerialreturnid)
- [fields](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md#fields)
- [runtime](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md#runtime)
- [typeName](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md#typename)

### Methods

- [clone](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md#clone)
- [equals](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md#equals)
- [fromBinary](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md#frombinary)
- [fromJson](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md#fromjson)
- [fromJsonString](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md#fromjsonstring)
- [getType](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md#gettype)
- [toBinary](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md#tobinary)
- [toJSON](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md#tojson)
- [toJson](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md#tojson-1)
- [toJsonString](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md#tojsonstring)
- [equals](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md#equals-1)
- [fromBinary](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md#frombinary-1)
- [fromJson](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md#fromjson-1)
- [fromJsonString](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobFreeIssueMaterialReturnItemHistoryRequest**(`data?`): [`OutwardJobFreeIssueMaterialReturnItemHistoryRequest`](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobFreeIssueMaterialReturnItemHistoryRequest`](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md)\> |

#### Returns

[`OutwardJobFreeIssueMaterialReturnItemHistoryRequest`](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md)

#### Overrides

Message\&lt;OutwardJobFreeIssueMaterialReturnItemHistoryRequest\&gt;.constructor

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:945

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:943

___

### outwardJobFreeIssueMaterialReturnId

• **outwardJobFreeIssueMaterialReturnId**: `bigint` = `protoInt64.zero`

Stores the outward job free issue material return ID

**`Generated`**

from field: uint64 outward_job_free_issue_material_return_id = 10;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:936

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:952

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:950

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobFreeIssueMaterialReturnItemHistoryRequest"``

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:951

## Methods

### clone

▸ **clone**(): [`OutwardJobFreeIssueMaterialReturnItemHistoryRequest`](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobFreeIssueMaterialReturnItemHistoryRequest`](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobFreeIssueMaterialReturnItemHistoryRequest`](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterialReturnItemHistoryRequest`](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobFreeIssueMaterialReturnItemHistoryRequest`](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobFreeIssueMaterialReturnItemHistoryRequest`](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobFreeIssueMaterialReturnItemHistoryRequest`](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterialReturnItemHistoryRequest`](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobFreeIssueMaterialReturnItemHistoryRequest`](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterialReturnItemHistoryRequest`](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:969

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobFreeIssueMaterialReturnItemHistoryRequest`](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterialReturnItemHistoryRequest`](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:957

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobFreeIssueMaterialReturnItemHistoryRequest`](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterialReturnItemHistoryRequest`](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:961

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobFreeIssueMaterialReturnItemHistoryRequest`](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterialReturnItemHistoryRequest`](OutwardJobFreeIssueMaterialReturnItemHistoryRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:965
