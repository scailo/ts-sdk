[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest

# Class: OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest

Describes the parameters that are required to retrieve the info of a prospective outward job free issue material return item

**`Generated`**

from message Scailo.OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest

## Hierarchy

- `Message`\<[`OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest`](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md)\>

  ↳ **`OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md#constructor)

### Properties

- [familyId](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md#familyid)
- [outwardJobFreeIssueMaterialReturnId](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md#outwardjobfreeissuematerialreturnid)
- [fields](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md#fields)
- [runtime](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md#runtime)
- [typeName](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md#typename)

### Methods

- [clone](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md#clone)
- [equals](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md#equals)
- [fromBinary](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md#frombinary)
- [fromJson](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md#fromjson)
- [fromJsonString](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md#fromjsonstring)
- [getType](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md#gettype)
- [toBinary](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md#tobinary)
- [toJSON](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md#tojson)
- [toJson](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md#tojson-1)
- [toJsonString](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md#tojsonstring)
- [equals](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md#equals-1)
- [fromBinary](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md#frombinary-1)
- [fromJson](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md#fromjson-1)
- [fromJsonString](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest**(`data?`): [`OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest`](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest`](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md)\> |

#### Returns

[`OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest`](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md)

#### Overrides

Message\&lt;OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest\&gt;.constructor

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1072

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1070

___

### outwardJobFreeIssueMaterialReturnId

• **outwardJobFreeIssueMaterialReturnId**: `bigint` = `protoInt64.zero`

Stores the outward job free issue material return ID

**`Generated`**

from field: uint64 outward_job_free_issue_material_return_id = 10;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1063

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1079

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1077

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest"``

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1078

## Methods

### clone

▸ **clone**(): [`OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest`](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest`](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest`](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest`](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest`](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest`](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest`](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest`](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest`](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest`](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1096

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest`](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest`](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1084

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest`](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest`](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1088

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest`](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest`](OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1092
