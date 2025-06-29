[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamiliesServiceFilterReq

# Class: FamiliesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.FamiliesServiceFilterReq

## Hierarchy

- `Message`\<[`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)\>

  ↳ **`FamiliesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](FamiliesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](FamiliesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](FamiliesServiceFilterReq.md#approvedonend)
- [approvedOnStart](FamiliesServiceFilterReq.md#approvedonstart)
- [approverRoleId](FamiliesServiceFilterReq.md#approverroleid)
- [code](FamiliesServiceFilterReq.md#code)
- [consumptionSequence](FamiliesServiceFilterReq.md#consumptionsequence)
- [count](FamiliesServiceFilterReq.md#count)
- [creationTimestampEnd](FamiliesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](FamiliesServiceFilterReq.md#creationtimestampstart)
- [drawingNumber](FamiliesServiceFilterReq.md#drawingnumber)
- [entityUuid](FamiliesServiceFilterReq.md#entityuuid)
- [familyType](FamiliesServiceFilterReq.md#familytype)
- [formData](FamiliesServiceFilterReq.md#formdata)
- [hsnSacCode](FamiliesServiceFilterReq.md#hsnsaccode)
- [isActive](FamiliesServiceFilterReq.md#isactive)
- [isLeaf](FamiliesServiceFilterReq.md#isleaf)
- [labelId](FamiliesServiceFilterReq.md#labelid)
- [ledgerId](FamiliesServiceFilterReq.md#ledgerid)
- [modificationTimestampEnd](FamiliesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](FamiliesServiceFilterReq.md#modificationtimestampstart)
- [multiFamilyType](FamiliesServiceFilterReq.md#multifamilytype)
- [multiStatus](FamiliesServiceFilterReq.md#multistatus)
- [name](FamiliesServiceFilterReq.md#name)
- [offset](FamiliesServiceFilterReq.md#offset)
- [parentId](FamiliesServiceFilterReq.md#parentid)
- [parentStorageId](FamiliesServiceFilterReq.md#parentstorageid)
- [qcGroupId](FamiliesServiceFilterReq.md#qcgroupid)
- [sortKey](FamiliesServiceFilterReq.md#sortkey)
- [sortOrder](FamiliesServiceFilterReq.md#sortorder)
- [status](FamiliesServiceFilterReq.md#status)
- [taxGroupId](FamiliesServiceFilterReq.md#taxgroupid)
- [unitQuantity](FamiliesServiceFilterReq.md#unitquantity)
- [uomId](FamiliesServiceFilterReq.md#uomid)
- [fields](FamiliesServiceFilterReq.md#fields)
- [runtime](FamiliesServiceFilterReq.md#runtime)
- [typeName](FamiliesServiceFilterReq.md#typename)

### Methods

- [clone](FamiliesServiceFilterReq.md#clone)
- [equals](FamiliesServiceFilterReq.md#equals)
- [fromBinary](FamiliesServiceFilterReq.md#frombinary)
- [fromJson](FamiliesServiceFilterReq.md#fromjson)
- [fromJsonString](FamiliesServiceFilterReq.md#fromjsonstring)
- [getType](FamiliesServiceFilterReq.md#gettype)
- [toBinary](FamiliesServiceFilterReq.md#tobinary)
- [toJSON](FamiliesServiceFilterReq.md#tojson)
- [toJson](FamiliesServiceFilterReq.md#tojson-1)
- [toJsonString](FamiliesServiceFilterReq.md#tojsonstring)
- [equals](FamiliesServiceFilterReq.md#equals-1)
- [fromBinary](FamiliesServiceFilterReq.md#frombinary-1)
- [fromJson](FamiliesServiceFilterReq.md#fromjson-1)
- [fromJsonString](FamiliesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamiliesServiceFilterReq**(`data?`): [`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)\> |

#### Returns

[`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)

#### Overrides

Message\&lt;FamiliesServiceFilterReq\&gt;.constructor

#### Defined in

src/families.scailo_pb.ts:1352

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/families.scailo_pb.ts:1224

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/families.scailo_pb.ts:1217

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/families.scailo_pb.ts:1210

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/families.scailo_pb.ts:1231

___

### code

• **code**: `string` = `""`

The unique code that represents the family

**`Generated`**

from field: string code = 22;

#### Defined in

src/families.scailo_pb.ts:1245

___

### consumptionSequence

• **consumptionSequence**: [`CONSUMPTION_SEQUENCE`](../enums/CONSUMPTION_SEQUENCE.md) = `CONSUMPTION_SEQUENCE.CONSUMPTION_SEQUENCE_ANY_UNSPECIFIED`

Stores the consumption sequence

**`Generated`**

from field: Scailo.CONSUMPTION_SEQUENCE consumption_sequence = 39;

#### Defined in

src/families.scailo_pb.ts:1329

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/families.scailo_pb.ts:1133

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/families.scailo_pb.ts:1168

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/families.scailo_pb.ts:1161

___

### drawingNumber

• **drawingNumber**: `string` = `""`

The drawing number of the family

**`Generated`**

from field: string drawing_number = 23;

#### Defined in

src/families.scailo_pb.ts:1252

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/families.scailo_pb.ts:1189

___

### familyType

• **familyType**: [`FAMILY_TYPE`](../enums/FAMILY_TYPE.md) = `FAMILY_TYPE.FAMILY_TYPE_ANY_UNSPECIFIED`

The type of the family

**`Generated`**

from field: Scailo.FAMILY_TYPE family_type = 25;

#### Defined in

src/families.scailo_pb.ts:1259

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

src/families.scailo_pb.ts:1350

___

### hsnSacCode

• **hsnSacCode**: `string` = `""`

The HSN/SAC code of the family

**`Generated`**

from field: string hsn_sac_code = 26;

#### Defined in

src/families.scailo_pb.ts:1273

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/families.scailo_pb.ts:1126

___

### isLeaf

• **isLeaf**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Filter with the given leaf property

**`Generated`**

from field: Scailo.BOOL_FILTER is_leaf = 30;

#### Defined in

src/families.scailo_pb.ts:1301

___

### labelId

• **labelId**: `bigint` = `protoInt64.zero`

Filter by families that have the given label ID

**`Generated`**

from field: uint64 label_id = 60;

#### Defined in

src/families.scailo_pb.ts:1343

___

### ledgerId

• **ledgerId**: `bigint` = `protoInt64.zero`

Stores the ID of the ledger

**`Generated`**

from field: uint64 ledger_id = 31;

#### Defined in

src/families.scailo_pb.ts:1308

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/families.scailo_pb.ts:1182

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/families.scailo_pb.ts:1175

___

### multiFamilyType

• **multiFamilyType**: [`FAMILY_TYPE`](../enums/FAMILY_TYPE.md)[] = `[]`

Filter from any of the given family types. All the records that match any of the family types will be returned

**`Generated`**

from field: repeated Scailo.FAMILY_TYPE multi_family_type = 250;

#### Defined in

src/families.scailo_pb.ts:1266

___

### multiStatus

• **multiStatus**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)[] = `[]`

Filter with the given multiple statuses (if the list is not empty). All the records that match any of the statuses will be returned

**`Generated`**

from field: repeated Scailo.STANDARD_LIFECYCLE_STATUS multi_status = 100;

#### Defined in

src/families.scailo_pb.ts:1203

___

### name

• **name**: `string` = `""`

The name of the family

**`Generated`**

from field: string name = 20;

#### Defined in

src/families.scailo_pb.ts:1238

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/families.scailo_pb.ts:1140

___

### parentId

• **parentId**: `bigint` = `protoInt64.zero`

Stores the ID of the parent family

**`Generated`**

from field: uint64 parent_id = 29;

#### Defined in

src/families.scailo_pb.ts:1294

___

### parentStorageId

• **parentStorageId**: `bigint` = `protoInt64.zero`

Filter by families that are present in the given parent storage ID (and all the corresponding child storage IDs)

**`Generated`**

from field: uint64 parent_storage_id = 50;

#### Defined in

src/families.scailo_pb.ts:1336

___

### qcGroupId

• **qcGroupId**: `bigint` = `protoInt64.zero`

Stores the ID of the QC group

**`Generated`**

from field: uint64 qc_group_id = 32;

#### Defined in

src/families.scailo_pb.ts:1315

___

### sortKey

• **sortKey**: [`FAMILY_SORT_KEY`](../enums/FAMILY_SORT_KEY.md) = `FAMILY_SORT_KEY.FAMILY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.FAMILY_SORT_KEY sort_key = 5;

#### Defined in

src/families.scailo_pb.ts:1154

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/families.scailo_pb.ts:1147

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this family

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/families.scailo_pb.ts:1196

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

Stores the ID of the tax group

**`Generated`**

from field: uint64 tax_group_id = 33;

#### Defined in

src/families.scailo_pb.ts:1322

___

### unitQuantity

• **unitQuantity**: `bigint` = `protoInt64.zero`

Stores the unit quantity

**`Generated`**

from field: uint64 unit_quantity = 28;

#### Defined in

src/families.scailo_pb.ts:1287

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated unit of material

**`Generated`**

from field: uint64 uom_id = 27;

#### Defined in

src/families.scailo_pb.ts:1280

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/families.scailo_pb.ts:1359

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/families.scailo_pb.ts:1357

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamiliesServiceFilterReq"``

#### Defined in

src/families.scailo_pb.ts:1358

## Methods

### clone

▸ **clone**(): [`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md) \| `PlainMessage`\<[`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md) \| `PlainMessage`\<[`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md) \| `PlainMessage`\<[`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/families.scailo_pb.ts:1407

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)

#### Defined in

src/families.scailo_pb.ts:1395

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)

#### Defined in

src/families.scailo_pb.ts:1399

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)

#### Defined in

src/families.scailo_pb.ts:1403
