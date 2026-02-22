[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FeedstocksServiceFilterReq

# Class: FeedstocksServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.FeedstocksServiceFilterReq

## Hierarchy

- `Message`\<[`FeedstocksServiceFilterReq`](FeedstocksServiceFilterReq.md)\>

  ↳ **`FeedstocksServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](FeedstocksServiceFilterReq.md#constructor)

### Properties

- [code](FeedstocksServiceFilterReq.md#code)
- [count](FeedstocksServiceFilterReq.md#count)
- [creationTimestampEnd](FeedstocksServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](FeedstocksServiceFilterReq.md#creationtimestampstart)
- [discardedAtEnd](FeedstocksServiceFilterReq.md#discardedatend)
- [discardedAtStart](FeedstocksServiceFilterReq.md#discardedatstart)
- [entityUuid](FeedstocksServiceFilterReq.md#entityuuid)
- [familyId](FeedstocksServiceFilterReq.md#familyid)
- [formData](FeedstocksServiceFilterReq.md#formdata)
- [hash](FeedstocksServiceFilterReq.md#hash)
- [internalItemCode](FeedstocksServiceFilterReq.md#internalitemcode)
- [isActive](FeedstocksServiceFilterReq.md#isactive)
- [isQcReportPublic](FeedstocksServiceFilterReq.md#isqcreportpublic)
- [locationId](FeedstocksServiceFilterReq.md#locationid)
- [modificationTimestampEnd](FeedstocksServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](FeedstocksServiceFilterReq.md#modificationtimestampstart)
- [offset](FeedstocksServiceFilterReq.md#offset)
- [parentRefId](FeedstocksServiceFilterReq.md#parentrefid)
- [quantityRemainingMax](FeedstocksServiceFilterReq.md#quantityremainingmax)
- [quantityRemainingMin](FeedstocksServiceFilterReq.md#quantityremainingmin)
- [refFrom](FeedstocksServiceFilterReq.md#reffrom)
- [refId](FeedstocksServiceFilterReq.md#refid)
- [secondaryUomId](FeedstocksServiceFilterReq.md#secondaryuomid)
- [shelfLifeTimestampEnd](FeedstocksServiceFilterReq.md#shelflifetimestampend)
- [shelfLifeTimestampStart](FeedstocksServiceFilterReq.md#shelflifetimestampstart)
- [sortKey](FeedstocksServiceFilterReq.md#sortkey)
- [sortOrder](FeedstocksServiceFilterReq.md#sortorder)
- [status](FeedstocksServiceFilterReq.md#status)
- [storageId](FeedstocksServiceFilterReq.md#storageid)
- [storeId](FeedstocksServiceFilterReq.md#storeid)
- [storeIntakeAtEnd](FeedstocksServiceFilterReq.md#storeintakeatend)
- [storeIntakeAtStart](FeedstocksServiceFilterReq.md#storeintakeatstart)
- [vendorId](FeedstocksServiceFilterReq.md#vendorid)
- [warrantyTimestampEnd](FeedstocksServiceFilterReq.md#warrantytimestampend)
- [warrantyTimestampStart](FeedstocksServiceFilterReq.md#warrantytimestampstart)
- [fields](FeedstocksServiceFilterReq.md#fields)
- [runtime](FeedstocksServiceFilterReq.md#runtime)
- [typeName](FeedstocksServiceFilterReq.md#typename)

### Methods

- [clone](FeedstocksServiceFilterReq.md#clone)
- [equals](FeedstocksServiceFilterReq.md#equals)
- [fromBinary](FeedstocksServiceFilterReq.md#frombinary)
- [fromJson](FeedstocksServiceFilterReq.md#fromjson)
- [fromJsonString](FeedstocksServiceFilterReq.md#fromjsonstring)
- [getType](FeedstocksServiceFilterReq.md#gettype)
- [toBinary](FeedstocksServiceFilterReq.md#tobinary)
- [toJSON](FeedstocksServiceFilterReq.md#tojson)
- [toJson](FeedstocksServiceFilterReq.md#tojson-1)
- [toJsonString](FeedstocksServiceFilterReq.md#tojsonstring)
- [equals](FeedstocksServiceFilterReq.md#equals-1)
- [fromBinary](FeedstocksServiceFilterReq.md#frombinary-1)
- [fromJson](FeedstocksServiceFilterReq.md#fromjson-1)
- [fromJsonString](FeedstocksServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new FeedstocksServiceFilterReq**(`data?`): [`FeedstocksServiceFilterReq`](FeedstocksServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FeedstocksServiceFilterReq`](FeedstocksServiceFilterReq.md)\> |

#### Returns

[`FeedstocksServiceFilterReq`](FeedstocksServiceFilterReq.md)

#### Overrides

Message\&lt;FeedstocksServiceFilterReq\&gt;.constructor

#### Defined in

[src/feedstocks.scailo_pb.ts:1194](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1194)

## Properties

### code

• **code**: `string` = `""`

The auto generated code of the feedstock

**`Generated`**

from field: string code = 34;

#### Defined in

[src/feedstocks.scailo_pb.ts:1085](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1085)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/feedstocks.scailo_pb.ts:959](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L959)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/feedstocks.scailo_pb.ts:994](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L994)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/feedstocks.scailo_pb.ts:987](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L987)

___

### discardedAtEnd

• **discardedAtEnd**: `bigint` = `protoInt64.zero`

The end range of discarded timestamp

**`Generated`**

from field: uint64 discarded_at_end = 23;

#### Defined in

[src/feedstocks.scailo_pb.ts:1050](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1050)

___

### discardedAtStart

• **discardedAtStart**: `bigint` = `protoInt64.zero`

The start range of discarded timestamp

**`Generated`**

from field: uint64 discarded_at_start = 22;

#### Defined in

[src/feedstocks.scailo_pb.ts:1043](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1043)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/feedstocks.scailo_pb.ts:1015](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1015)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family

**`Generated`**

from field: uint64 family_id = 33;

#### Defined in

[src/feedstocks.scailo_pb.ts:1078](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1078)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/feedstocks.scailo_pb.ts:1192](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1192)

___

### hash

• **hash**: `string` = `""`

The computed hash of the feedstock

**`Generated`**

from field: string hash = 36;

#### Defined in

[src/feedstocks.scailo_pb.ts:1099](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1099)

___

### internalItemCode

• **internalItemCode**: `string` = `""`

Filter by the exact internal code

**`Generated`**

from field: string internal_item_code = 35;

#### Defined in

[src/feedstocks.scailo_pb.ts:1092](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1092)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/feedstocks.scailo_pb.ts:952](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L952)

___

### isQcReportPublic

• **isQcReportPublic**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Stores if the associated QC report should be public

**`Generated`**

from field: Scailo.BOOL_FILTER is_qc_report_public = 52;

#### Defined in

[src/feedstocks.scailo_pb.ts:1169](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1169)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

Filter by the location ID

**`Generated`**

from field: uint64 location_id = 54;

#### Defined in

[src/feedstocks.scailo_pb.ts:1176](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1176)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/feedstocks.scailo_pb.ts:1008](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1008)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/feedstocks.scailo_pb.ts:1001](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1001)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/feedstocks.scailo_pb.ts:966](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L966)

___

### parentRefId

• **parentRefId**: `bigint` = `protoInt64.zero`

The ID of the parent inventory item

**`Generated`**

from field: uint64 parent_ref_id = 30;

#### Defined in

[src/feedstocks.scailo_pb.ts:1057](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1057)

___

### quantityRemainingMax

• **quantityRemainingMax**: `bigint` = `protoInt64.zero`

The maximum remaining quantity (in cents)

**`Generated`**

from field: uint64 quantity_remaining_max = 38;

#### Defined in

[src/feedstocks.scailo_pb.ts:1113](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1113)

___

### quantityRemainingMin

• **quantityRemainingMin**: `bigint` = `protoInt64.zero`

The minimum remaining quantity (in cents)

**`Generated`**

from field: uint64 quantity_remaining_min = 37;

#### Defined in

[src/feedstocks.scailo_pb.ts:1106](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1106)

___

### refFrom

• **refFrom**: [`FEEDSTOCK_REF_FROM`](../enums/FEEDSTOCK_REF_FROM.md) = `FEEDSTOCK_REF_FROM.FEEDSTOCK_REF_FROM_ANY_UNSPECIFIED`

Stores the reference from

**`Generated`**

from field: Scailo.FEEDSTOCK_REF_FROM ref_from = 31;

#### Defined in

[src/feedstocks.scailo_pb.ts:1064](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1064)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Stores the ID of the reference

**`Generated`**

from field: uint64 ref_id = 32;

#### Defined in

[src/feedstocks.scailo_pb.ts:1071](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1071)

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of feedstock

**`Generated`**

from field: uint64 secondary_uom_id = 39;

#### Defined in

[src/feedstocks.scailo_pb.ts:1120](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1120)

___

### shelfLifeTimestampEnd

• **shelfLifeTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of shelf life timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp_end = 41;

#### Defined in

[src/feedstocks.scailo_pb.ts:1134](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1134)

___

### shelfLifeTimestampStart

• **shelfLifeTimestampStart**: `bigint` = `protoInt64.zero`

The start range of shelf life timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp_start = 40;

#### Defined in

[src/feedstocks.scailo_pb.ts:1127](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1127)

___

### sortKey

• **sortKey**: [`INVENTORY_SORT_KEY`](../enums/INVENTORY_SORT_KEY.md) = `INVENTORY_SORT_KEY.INVENTORY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.INVENTORY_SORT_KEY sort_key = 5;

#### Defined in

[src/feedstocks.scailo_pb.ts:980](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L980)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/feedstocks.scailo_pb.ts:973](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L973)

___

### status

• **status**: [`INVENTORY_LIFECYCLE`](../enums/INVENTORY_LIFECYCLE.md) = `INVENTORY_LIFECYCLE.INVENTORY_LIFECYCLE_ANY_UNSPECIFIED`

The status of this feedstock

**`Generated`**

from field: Scailo.INVENTORY_LIFECYCLE status = 10;

#### Defined in

[src/feedstocks.scailo_pb.ts:1022](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1022)

___

### storageId

• **storageId**: `bigint` = `protoInt64.zero`

Stores an optional ID of the associated storage that the feedstock is stored in

**`Generated`**

from field: uint64 storage_id = 51;

#### Defined in

[src/feedstocks.scailo_pb.ts:1162](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1162)

___

### storeId

• **storeId**: `bigint` = `protoInt64.zero`

Stores the store to which the feedstock is sent to

**`Generated`**

from field: uint64 store_id = 50;

#### Defined in

[src/feedstocks.scailo_pb.ts:1155](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1155)

___

### storeIntakeAtEnd

• **storeIntakeAtEnd**: `bigint` = `protoInt64.zero`

The end range of store intake timestamp

**`Generated`**

from field: uint64 store_intake_at_end = 21;

#### Defined in

[src/feedstocks.scailo_pb.ts:1036](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1036)

___

### storeIntakeAtStart

• **storeIntakeAtStart**: `bigint` = `protoInt64.zero`

The start range of store intake timestamp

**`Generated`**

from field: uint64 store_intake_at_start = 20;

#### Defined in

[src/feedstocks.scailo_pb.ts:1029](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1029)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

Filter by the given vendor ID

--------------------------------------------------

**`Generated`**

from field: uint64 vendor_id = 81;

#### Defined in

[src/feedstocks.scailo_pb.ts:1185](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1185)

___

### warrantyTimestampEnd

• **warrantyTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of the warranty timestamp

**`Generated`**

from field: uint64 warranty_timestamp_end = 43;

#### Defined in

[src/feedstocks.scailo_pb.ts:1148](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1148)

___

### warrantyTimestampStart

• **warrantyTimestampStart**: `bigint` = `protoInt64.zero`

The start range of the warranty timestamp

**`Generated`**

from field: uint64 warranty_timestamp_start = 42;

#### Defined in

[src/feedstocks.scailo_pb.ts:1141](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1141)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/feedstocks.scailo_pb.ts:1201](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1201)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/feedstocks.scailo_pb.ts:1199](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1199)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FeedstocksServiceFilterReq"``

#### Defined in

[src/feedstocks.scailo_pb.ts:1200](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1200)

## Methods

### clone

▸ **clone**(): [`FeedstocksServiceFilterReq`](FeedstocksServiceFilterReq.md)

Create a deep copy.

#### Returns

[`FeedstocksServiceFilterReq`](FeedstocksServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`FeedstocksServiceFilterReq`](FeedstocksServiceFilterReq.md) \| `PlainMessage`\<[`FeedstocksServiceFilterReq`](FeedstocksServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`FeedstocksServiceFilterReq`](FeedstocksServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FeedstocksServiceFilterReq`](FeedstocksServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`FeedstocksServiceFilterReq`](FeedstocksServiceFilterReq.md) \| `PlainMessage`\<[`FeedstocksServiceFilterReq`](FeedstocksServiceFilterReq.md)\> |
| `b` | `undefined` \| [`FeedstocksServiceFilterReq`](FeedstocksServiceFilterReq.md) \| `PlainMessage`\<[`FeedstocksServiceFilterReq`](FeedstocksServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/feedstocks.scailo_pb.ts:1251](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1251)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FeedstocksServiceFilterReq`](FeedstocksServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FeedstocksServiceFilterReq`](FeedstocksServiceFilterReq.md)

#### Defined in

[src/feedstocks.scailo_pb.ts:1239](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1239)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FeedstocksServiceFilterReq`](FeedstocksServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FeedstocksServiceFilterReq`](FeedstocksServiceFilterReq.md)

#### Defined in

[src/feedstocks.scailo_pb.ts:1243](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1243)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FeedstocksServiceFilterReq`](FeedstocksServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FeedstocksServiceFilterReq`](FeedstocksServiceFilterReq.md)

#### Defined in

[src/feedstocks.scailo_pb.ts:1247](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/feedstocks.scailo_pb.ts#L1247)
