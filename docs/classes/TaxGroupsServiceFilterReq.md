[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TaxGroupsServiceFilterReq

# Class: TaxGroupsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.TaxGroupsServiceFilterReq

## Hierarchy

- `Message`\<[`TaxGroupsServiceFilterReq`](TaxGroupsServiceFilterReq.md)\>

  ↳ **`TaxGroupsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](TaxGroupsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](TaxGroupsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](TaxGroupsServiceFilterReq.md#approvedonend)
- [approvedOnStart](TaxGroupsServiceFilterReq.md#approvedonstart)
- [approverRoleId](TaxGroupsServiceFilterReq.md#approverroleid)
- [category](TaxGroupsServiceFilterReq.md#category)
- [count](TaxGroupsServiceFilterReq.md#count)
- [creationTimestampEnd](TaxGroupsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](TaxGroupsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](TaxGroupsServiceFilterReq.md#entityuuid)
- [isActive](TaxGroupsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](TaxGroupsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](TaxGroupsServiceFilterReq.md#modificationtimestampstart)
- [name](TaxGroupsServiceFilterReq.md#name)
- [offset](TaxGroupsServiceFilterReq.md#offset)
- [sortKey](TaxGroupsServiceFilterReq.md#sortkey)
- [sortOrder](TaxGroupsServiceFilterReq.md#sortorder)
- [status](TaxGroupsServiceFilterReq.md#status)
- [fields](TaxGroupsServiceFilterReq.md#fields)
- [runtime](TaxGroupsServiceFilterReq.md#runtime)
- [typeName](TaxGroupsServiceFilterReq.md#typename)

### Methods

- [clone](TaxGroupsServiceFilterReq.md#clone)
- [equals](TaxGroupsServiceFilterReq.md#equals)
- [fromBinary](TaxGroupsServiceFilterReq.md#frombinary)
- [fromJson](TaxGroupsServiceFilterReq.md#fromjson)
- [fromJsonString](TaxGroupsServiceFilterReq.md#fromjsonstring)
- [getType](TaxGroupsServiceFilterReq.md#gettype)
- [toBinary](TaxGroupsServiceFilterReq.md#tobinary)
- [toJSON](TaxGroupsServiceFilterReq.md#tojson)
- [toJson](TaxGroupsServiceFilterReq.md#tojson-1)
- [toJsonString](TaxGroupsServiceFilterReq.md#tojsonstring)
- [equals](TaxGroupsServiceFilterReq.md#equals-1)
- [fromBinary](TaxGroupsServiceFilterReq.md#frombinary-1)
- [fromJson](TaxGroupsServiceFilterReq.md#fromjson-1)
- [fromJsonString](TaxGroupsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new TaxGroupsServiceFilterReq**(`data?`): [`TaxGroupsServiceFilterReq`](TaxGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TaxGroupsServiceFilterReq`](TaxGroupsServiceFilterReq.md)\> |

#### Returns

[`TaxGroupsServiceFilterReq`](TaxGroupsServiceFilterReq.md)

#### Overrides

Message\&lt;TaxGroupsServiceFilterReq\&gt;.constructor

#### Defined in

src/tax_groups.scailo_pb.ts:707

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/tax_groups.scailo_pb.ts:684

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/tax_groups.scailo_pb.ts:677

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/tax_groups.scailo_pb.ts:670

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/tax_groups.scailo_pb.ts:691

___

### category

• **category**: [`TAX_GROUP_CATEGORY`](../enums/TAX_GROUP_CATEGORY.md) = `TAX_GROUP_CATEGORY.TAX_GROUP_CATEGORY_ANY_UNSPECIFIED`

The category of the tax group

**`Generated`**

from field: Scailo.TAX_GROUP_CATEGORY category = 32;

#### Defined in

src/tax_groups.scailo_pb.ts:705

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/tax_groups.scailo_pb.ts:600

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/tax_groups.scailo_pb.ts:635

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/tax_groups.scailo_pb.ts:628

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/tax_groups.scailo_pb.ts:656

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/tax_groups.scailo_pb.ts:593

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/tax_groups.scailo_pb.ts:649

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/tax_groups.scailo_pb.ts:642

___

### name

• **name**: `string` = `""`

The name of the tax group

**`Generated`**

from field: string name = 20;

#### Defined in

src/tax_groups.scailo_pb.ts:698

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/tax_groups.scailo_pb.ts:607

___

### sortKey

• **sortKey**: [`TAX_GROUP_SORT_KEY`](../enums/TAX_GROUP_SORT_KEY.md) = `TAX_GROUP_SORT_KEY.TAX_GROUP_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.TAX_GROUP_SORT_KEY sort_key = 5;

#### Defined in

src/tax_groups.scailo_pb.ts:621

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/tax_groups.scailo_pb.ts:614

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this tax group

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/tax_groups.scailo_pb.ts:663

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/tax_groups.scailo_pb.ts:714

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/tax_groups.scailo_pb.ts:712

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TaxGroupsServiceFilterReq"``

#### Defined in

src/tax_groups.scailo_pb.ts:713

## Methods

### clone

▸ **clone**(): [`TaxGroupsServiceFilterReq`](TaxGroupsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`TaxGroupsServiceFilterReq`](TaxGroupsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`TaxGroupsServiceFilterReq`](TaxGroupsServiceFilterReq.md) \| `PlainMessage`\<[`TaxGroupsServiceFilterReq`](TaxGroupsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`TaxGroupsServiceFilterReq`](TaxGroupsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TaxGroupsServiceFilterReq`](TaxGroupsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`TaxGroupsServiceFilterReq`](TaxGroupsServiceFilterReq.md) \| `PlainMessage`\<[`TaxGroupsServiceFilterReq`](TaxGroupsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`TaxGroupsServiceFilterReq`](TaxGroupsServiceFilterReq.md) \| `PlainMessage`\<[`TaxGroupsServiceFilterReq`](TaxGroupsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/tax_groups.scailo_pb.ts:746

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TaxGroupsServiceFilterReq`](TaxGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TaxGroupsServiceFilterReq`](TaxGroupsServiceFilterReq.md)

#### Defined in

src/tax_groups.scailo_pb.ts:734

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TaxGroupsServiceFilterReq`](TaxGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxGroupsServiceFilterReq`](TaxGroupsServiceFilterReq.md)

#### Defined in

src/tax_groups.scailo_pb.ts:738

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TaxGroupsServiceFilterReq`](TaxGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxGroupsServiceFilterReq`](TaxGroupsServiceFilterReq.md)

#### Defined in

src/tax_groups.scailo_pb.ts:742
