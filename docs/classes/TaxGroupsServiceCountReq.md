[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TaxGroupsServiceCountReq

# Class: TaxGroupsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.TaxGroupsServiceCountReq

## Hierarchy

- `Message`\<[`TaxGroupsServiceCountReq`](TaxGroupsServiceCountReq.md)\>

  ↳ **`TaxGroupsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](TaxGroupsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](TaxGroupsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](TaxGroupsServiceCountReq.md#approvedonend)
- [approvedOnStart](TaxGroupsServiceCountReq.md#approvedonstart)
- [approverRoleId](TaxGroupsServiceCountReq.md#approverroleid)
- [category](TaxGroupsServiceCountReq.md#category)
- [code](TaxGroupsServiceCountReq.md#code)
- [creationTimestampEnd](TaxGroupsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](TaxGroupsServiceCountReq.md#creationtimestampstart)
- [entityUuid](TaxGroupsServiceCountReq.md#entityuuid)
- [isActive](TaxGroupsServiceCountReq.md#isactive)
- [modificationTimestampEnd](TaxGroupsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](TaxGroupsServiceCountReq.md#modificationtimestampstart)
- [name](TaxGroupsServiceCountReq.md#name)
- [status](TaxGroupsServiceCountReq.md#status)
- [fields](TaxGroupsServiceCountReq.md#fields)
- [runtime](TaxGroupsServiceCountReq.md#runtime)
- [typeName](TaxGroupsServiceCountReq.md#typename)

### Methods

- [clone](TaxGroupsServiceCountReq.md#clone)
- [equals](TaxGroupsServiceCountReq.md#equals)
- [fromBinary](TaxGroupsServiceCountReq.md#frombinary)
- [fromJson](TaxGroupsServiceCountReq.md#fromjson)
- [fromJsonString](TaxGroupsServiceCountReq.md#fromjsonstring)
- [getType](TaxGroupsServiceCountReq.md#gettype)
- [toBinary](TaxGroupsServiceCountReq.md#tobinary)
- [toJSON](TaxGroupsServiceCountReq.md#tojson)
- [toJson](TaxGroupsServiceCountReq.md#tojson-1)
- [toJsonString](TaxGroupsServiceCountReq.md#tojsonstring)
- [equals](TaxGroupsServiceCountReq.md#equals-1)
- [fromBinary](TaxGroupsServiceCountReq.md#frombinary-1)
- [fromJson](TaxGroupsServiceCountReq.md#fromjson-1)
- [fromJsonString](TaxGroupsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new TaxGroupsServiceCountReq**(`data?`): [`TaxGroupsServiceCountReq`](TaxGroupsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TaxGroupsServiceCountReq`](TaxGroupsServiceCountReq.md)\> |

#### Returns

[`TaxGroupsServiceCountReq`](TaxGroupsServiceCountReq.md)

#### Overrides

Message\&lt;TaxGroupsServiceCountReq\&gt;.constructor

#### Defined in

src/tax_groups.scailo_pb.ts:896

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/tax_groups.scailo_pb.ts:866

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/tax_groups.scailo_pb.ts:859

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/tax_groups.scailo_pb.ts:852

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/tax_groups.scailo_pb.ts:873

___

### category

• **category**: [`TAX_GROUP_CATEGORY`](../enums/TAX_GROUP_CATEGORY.md) = `TAX_GROUP_CATEGORY.TAX_GROUP_CATEGORY_ANY_UNSPECIFIED`

The category of the tax group

**`Generated`**

from field: Scailo.TAX_GROUP_CATEGORY category = 32;

#### Defined in

src/tax_groups.scailo_pb.ts:894

___

### code

• **code**: `string` = `""`

The unique code by which the location is classified

**`Generated`**

from field: string code = 21;

#### Defined in

src/tax_groups.scailo_pb.ts:887

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/tax_groups.scailo_pb.ts:817

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/tax_groups.scailo_pb.ts:810

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/tax_groups.scailo_pb.ts:838

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/tax_groups.scailo_pb.ts:803

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/tax_groups.scailo_pb.ts:831

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/tax_groups.scailo_pb.ts:824

___

### name

• **name**: `string` = `""`

The name of the tax group

**`Generated`**

from field: string name = 20;

#### Defined in

src/tax_groups.scailo_pb.ts:880

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this tax group

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/tax_groups.scailo_pb.ts:845

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/tax_groups.scailo_pb.ts:903

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/tax_groups.scailo_pb.ts:901

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TaxGroupsServiceCountReq"``

#### Defined in

src/tax_groups.scailo_pb.ts:902

## Methods

### clone

▸ **clone**(): [`TaxGroupsServiceCountReq`](TaxGroupsServiceCountReq.md)

Create a deep copy.

#### Returns

[`TaxGroupsServiceCountReq`](TaxGroupsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`TaxGroupsServiceCountReq`](TaxGroupsServiceCountReq.md) \| `PlainMessage`\<[`TaxGroupsServiceCountReq`](TaxGroupsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`TaxGroupsServiceCountReq`](TaxGroupsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TaxGroupsServiceCountReq`](TaxGroupsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`TaxGroupsServiceCountReq`](TaxGroupsServiceCountReq.md) \| `PlainMessage`\<[`TaxGroupsServiceCountReq`](TaxGroupsServiceCountReq.md)\> |
| `b` | `undefined` \| [`TaxGroupsServiceCountReq`](TaxGroupsServiceCountReq.md) \| `PlainMessage`\<[`TaxGroupsServiceCountReq`](TaxGroupsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/tax_groups.scailo_pb.ts:932

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TaxGroupsServiceCountReq`](TaxGroupsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TaxGroupsServiceCountReq`](TaxGroupsServiceCountReq.md)

#### Defined in

src/tax_groups.scailo_pb.ts:920

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TaxGroupsServiceCountReq`](TaxGroupsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxGroupsServiceCountReq`](TaxGroupsServiceCountReq.md)

#### Defined in

src/tax_groups.scailo_pb.ts:924

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TaxGroupsServiceCountReq`](TaxGroupsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxGroupsServiceCountReq`](TaxGroupsServiceCountReq.md)

#### Defined in

src/tax_groups.scailo_pb.ts:928
