[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / UnitsOfMaterialsServiceCountReq

# Class: UnitsOfMaterialsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.UnitsOfMaterialsServiceCountReq

## Hierarchy

- `Message`\<[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)\>

  ↳ **`UnitsOfMaterialsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](UnitsOfMaterialsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](UnitsOfMaterialsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](UnitsOfMaterialsServiceCountReq.md#approvedonend)
- [approvedOnStart](UnitsOfMaterialsServiceCountReq.md#approvedonstart)
- [approverRoleId](UnitsOfMaterialsServiceCountReq.md#approverroleid)
- [creationTimestampEnd](UnitsOfMaterialsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](UnitsOfMaterialsServiceCountReq.md#creationtimestampstart)
- [entityUuid](UnitsOfMaterialsServiceCountReq.md#entityuuid)
- [isActive](UnitsOfMaterialsServiceCountReq.md#isactive)
- [modificationTimestampEnd](UnitsOfMaterialsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](UnitsOfMaterialsServiceCountReq.md#modificationtimestampstart)
- [name](UnitsOfMaterialsServiceCountReq.md#name)
- [status](UnitsOfMaterialsServiceCountReq.md#status)
- [symbol](UnitsOfMaterialsServiceCountReq.md#symbol)
- [fields](UnitsOfMaterialsServiceCountReq.md#fields)
- [runtime](UnitsOfMaterialsServiceCountReq.md#runtime)
- [typeName](UnitsOfMaterialsServiceCountReq.md#typename)

### Methods

- [clone](UnitsOfMaterialsServiceCountReq.md#clone)
- [equals](UnitsOfMaterialsServiceCountReq.md#equals)
- [fromBinary](UnitsOfMaterialsServiceCountReq.md#frombinary)
- [fromJson](UnitsOfMaterialsServiceCountReq.md#fromjson)
- [fromJsonString](UnitsOfMaterialsServiceCountReq.md#fromjsonstring)
- [getType](UnitsOfMaterialsServiceCountReq.md#gettype)
- [toBinary](UnitsOfMaterialsServiceCountReq.md#tobinary)
- [toJSON](UnitsOfMaterialsServiceCountReq.md#tojson)
- [toJson](UnitsOfMaterialsServiceCountReq.md#tojson-1)
- [toJsonString](UnitsOfMaterialsServiceCountReq.md#tojsonstring)
- [equals](UnitsOfMaterialsServiceCountReq.md#equals-1)
- [fromBinary](UnitsOfMaterialsServiceCountReq.md#frombinary-1)
- [fromJson](UnitsOfMaterialsServiceCountReq.md#fromjson-1)
- [fromJsonString](UnitsOfMaterialsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new UnitsOfMaterialsServiceCountReq**(`data?`): [`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)\> |

#### Returns

[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

#### Overrides

Message\&lt;UnitsOfMaterialsServiceCountReq\&gt;.constructor

#### Defined in

src/units_of_materials.scailo_pb.ts:797

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/units_of_materials.scailo_pb.ts:774

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/units_of_materials.scailo_pb.ts:767

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/units_of_materials.scailo_pb.ts:760

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/units_of_materials.scailo_pb.ts:781

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/units_of_materials.scailo_pb.ts:725

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/units_of_materials.scailo_pb.ts:718

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/units_of_materials.scailo_pb.ts:746

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/units_of_materials.scailo_pb.ts:711

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/units_of_materials.scailo_pb.ts:739

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/units_of_materials.scailo_pb.ts:732

___

### name

• **name**: `string` = `""`

The name of the unit of material

**`Generated`**

from field: string name = 20;

#### Defined in

src/units_of_materials.scailo_pb.ts:788

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this unit of material

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/units_of_materials.scailo_pb.ts:753

___

### symbol

• **symbol**: `string` = `""`

The unique symbol by which the unit of material is classified

**`Generated`**

from field: string symbol = 21;

#### Defined in

src/units_of_materials.scailo_pb.ts:795

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/units_of_materials.scailo_pb.ts:804

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/units_of_materials.scailo_pb.ts:802

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UnitsOfMaterialsServiceCountReq"``

#### Defined in

src/units_of_materials.scailo_pb.ts:803

## Methods

### clone

▸ **clone**(): [`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

Create a deep copy.

#### Returns

[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md) \| `PlainMessage`\<[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md) \| `PlainMessage`\<[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)\> |
| `b` | `undefined` \| [`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md) \| `PlainMessage`\<[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/units_of_materials.scailo_pb.ts:832

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

#### Defined in

src/units_of_materials.scailo_pb.ts:820

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

#### Defined in

src/units_of_materials.scailo_pb.ts:824

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

#### Defined in

src/units_of_materials.scailo_pb.ts:828
