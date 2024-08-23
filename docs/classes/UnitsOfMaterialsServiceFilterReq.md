[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / UnitsOfMaterialsServiceFilterReq

# Class: UnitsOfMaterialsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.UnitsOfMaterialsServiceFilterReq

## Hierarchy

- `Message`\<[`UnitsOfMaterialsServiceFilterReq`](UnitsOfMaterialsServiceFilterReq.md)\>

  ↳ **`UnitsOfMaterialsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](UnitsOfMaterialsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](UnitsOfMaterialsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](UnitsOfMaterialsServiceFilterReq.md#approvedonend)
- [approvedOnStart](UnitsOfMaterialsServiceFilterReq.md#approvedonstart)
- [approverRoleId](UnitsOfMaterialsServiceFilterReq.md#approverroleid)
- [count](UnitsOfMaterialsServiceFilterReq.md#count)
- [creationTimestampEnd](UnitsOfMaterialsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](UnitsOfMaterialsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](UnitsOfMaterialsServiceFilterReq.md#entityuuid)
- [isActive](UnitsOfMaterialsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](UnitsOfMaterialsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](UnitsOfMaterialsServiceFilterReq.md#modificationtimestampstart)
- [name](UnitsOfMaterialsServiceFilterReq.md#name)
- [offset](UnitsOfMaterialsServiceFilterReq.md#offset)
- [sortKey](UnitsOfMaterialsServiceFilterReq.md#sortkey)
- [sortOrder](UnitsOfMaterialsServiceFilterReq.md#sortorder)
- [status](UnitsOfMaterialsServiceFilterReq.md#status)
- [symbol](UnitsOfMaterialsServiceFilterReq.md#symbol)
- [fields](UnitsOfMaterialsServiceFilterReq.md#fields)
- [runtime](UnitsOfMaterialsServiceFilterReq.md#runtime)
- [typeName](UnitsOfMaterialsServiceFilterReq.md#typename)

### Methods

- [clone](UnitsOfMaterialsServiceFilterReq.md#clone)
- [equals](UnitsOfMaterialsServiceFilterReq.md#equals)
- [fromBinary](UnitsOfMaterialsServiceFilterReq.md#frombinary)
- [fromJson](UnitsOfMaterialsServiceFilterReq.md#fromjson)
- [fromJsonString](UnitsOfMaterialsServiceFilterReq.md#fromjsonstring)
- [getType](UnitsOfMaterialsServiceFilterReq.md#gettype)
- [toBinary](UnitsOfMaterialsServiceFilterReq.md#tobinary)
- [toJSON](UnitsOfMaterialsServiceFilterReq.md#tojson)
- [toJson](UnitsOfMaterialsServiceFilterReq.md#tojson-1)
- [toJsonString](UnitsOfMaterialsServiceFilterReq.md#tojsonstring)
- [equals](UnitsOfMaterialsServiceFilterReq.md#equals-1)
- [fromBinary](UnitsOfMaterialsServiceFilterReq.md#frombinary-1)
- [fromJson](UnitsOfMaterialsServiceFilterReq.md#fromjson-1)
- [fromJsonString](UnitsOfMaterialsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new UnitsOfMaterialsServiceFilterReq**(`data?`): [`UnitsOfMaterialsServiceFilterReq`](UnitsOfMaterialsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`UnitsOfMaterialsServiceFilterReq`](UnitsOfMaterialsServiceFilterReq.md)\> |

#### Returns

[`UnitsOfMaterialsServiceFilterReq`](UnitsOfMaterialsServiceFilterReq.md)

#### Overrides

Message\&lt;UnitsOfMaterialsServiceFilterReq\&gt;.constructor

#### Defined in

src/units_of_materials.scailo_pb.ts:655

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/units_of_materials.scailo_pb.ts:632

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/units_of_materials.scailo_pb.ts:625

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/units_of_materials.scailo_pb.ts:618

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/units_of_materials.scailo_pb.ts:639

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/units_of_materials.scailo_pb.ts:548

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/units_of_materials.scailo_pb.ts:583

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/units_of_materials.scailo_pb.ts:576

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/units_of_materials.scailo_pb.ts:604

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/units_of_materials.scailo_pb.ts:541

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/units_of_materials.scailo_pb.ts:597

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/units_of_materials.scailo_pb.ts:590

___

### name

• **name**: `string` = `""`

The name of the unit of material

**`Generated`**

from field: string name = 20;

#### Defined in

src/units_of_materials.scailo_pb.ts:646

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/units_of_materials.scailo_pb.ts:555

___

### sortKey

• **sortKey**: [`UNIT_OF_MATERIAL_SORT_KEY`](../enums/UNIT_OF_MATERIAL_SORT_KEY.md) = `UNIT_OF_MATERIAL_SORT_KEY.UNIT_OF_MATERIAL_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.UNIT_OF_MATERIAL_SORT_KEY sort_key = 5;

#### Defined in

src/units_of_materials.scailo_pb.ts:569

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/units_of_materials.scailo_pb.ts:562

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this unit of material

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/units_of_materials.scailo_pb.ts:611

___

### symbol

• **symbol**: `string` = `""`

The unique symbol by which the unit of material is classified

**`Generated`**

from field: string symbol = 21;

#### Defined in

src/units_of_materials.scailo_pb.ts:653

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/units_of_materials.scailo_pb.ts:662

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/units_of_materials.scailo_pb.ts:660

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UnitsOfMaterialsServiceFilterReq"``

#### Defined in

src/units_of_materials.scailo_pb.ts:661

## Methods

### clone

▸ **clone**(): [`UnitsOfMaterialsServiceFilterReq`](UnitsOfMaterialsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`UnitsOfMaterialsServiceFilterReq`](UnitsOfMaterialsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`UnitsOfMaterialsServiceFilterReq`](UnitsOfMaterialsServiceFilterReq.md) \| `PlainMessage`\<[`UnitsOfMaterialsServiceFilterReq`](UnitsOfMaterialsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`UnitsOfMaterialsServiceFilterReq`](UnitsOfMaterialsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`UnitsOfMaterialsServiceFilterReq`](UnitsOfMaterialsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`UnitsOfMaterialsServiceFilterReq`](UnitsOfMaterialsServiceFilterReq.md) \| `PlainMessage`\<[`UnitsOfMaterialsServiceFilterReq`](UnitsOfMaterialsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`UnitsOfMaterialsServiceFilterReq`](UnitsOfMaterialsServiceFilterReq.md) \| `PlainMessage`\<[`UnitsOfMaterialsServiceFilterReq`](UnitsOfMaterialsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/units_of_materials.scailo_pb.ts:694

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UnitsOfMaterialsServiceFilterReq`](UnitsOfMaterialsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`UnitsOfMaterialsServiceFilterReq`](UnitsOfMaterialsServiceFilterReq.md)

#### Defined in

src/units_of_materials.scailo_pb.ts:682

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UnitsOfMaterialsServiceFilterReq`](UnitsOfMaterialsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UnitsOfMaterialsServiceFilterReq`](UnitsOfMaterialsServiceFilterReq.md)

#### Defined in

src/units_of_materials.scailo_pb.ts:686

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UnitsOfMaterialsServiceFilterReq`](UnitsOfMaterialsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UnitsOfMaterialsServiceFilterReq`](UnitsOfMaterialsServiceFilterReq.md)

#### Defined in

src/units_of_materials.scailo_pb.ts:690
