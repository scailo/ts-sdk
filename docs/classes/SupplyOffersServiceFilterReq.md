[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SupplyOffersServiceFilterReq

# Class: SupplyOffersServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.SupplyOffersServiceFilterReq

## Hierarchy

- `Message`\<[`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)\>

  ↳ **`SupplyOffersServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](SupplyOffersServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](SupplyOffersServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](SupplyOffersServiceFilterReq.md#approvedonend)
- [approvedOnStart](SupplyOffersServiceFilterReq.md#approvedonstart)
- [approverRoleId](SupplyOffersServiceFilterReq.md#approverroleid)
- [buyerLocationId](SupplyOffersServiceFilterReq.md#buyerlocationid)
- [completedOnEnd](SupplyOffersServiceFilterReq.md#completedonend)
- [completedOnStart](SupplyOffersServiceFilterReq.md#completedonstart)
- [consigneeLocationId](SupplyOffersServiceFilterReq.md#consigneelocationid)
- [count](SupplyOffersServiceFilterReq.md#count)
- [creationTimestampEnd](SupplyOffersServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](SupplyOffersServiceFilterReq.md#creationtimestampstart)
- [currencyId](SupplyOffersServiceFilterReq.md#currencyid)
- [deliveryDateEnd](SupplyOffersServiceFilterReq.md#deliverydateend)
- [deliveryDateExact](SupplyOffersServiceFilterReq.md#deliverydateexact)
- [deliveryDateStart](SupplyOffersServiceFilterReq.md#deliverydatestart)
- [entityUuid](SupplyOffersServiceFilterReq.md#entityuuid)
- [familyId](SupplyOffersServiceFilterReq.md#familyid)
- [finalRefNumber](SupplyOffersServiceFilterReq.md#finalrefnumber)
- [isActive](SupplyOffersServiceFilterReq.md#isactive)
- [modificationTimestampEnd](SupplyOffersServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](SupplyOffersServiceFilterReq.md#modificationtimestampstart)
- [offset](SupplyOffersServiceFilterReq.md#offset)
- [projectId](SupplyOffersServiceFilterReq.md#projectid)
- [referenceId](SupplyOffersServiceFilterReq.md#referenceid)
- [sortKey](SupplyOffersServiceFilterReq.md#sortkey)
- [sortOrder](SupplyOffersServiceFilterReq.md#sortorder)
- [status](SupplyOffersServiceFilterReq.md#status)
- [totalValueMax](SupplyOffersServiceFilterReq.md#totalvaluemax)
- [totalValueMin](SupplyOffersServiceFilterReq.md#totalvaluemin)
- [vendorId](SupplyOffersServiceFilterReq.md#vendorid)
- [fields](SupplyOffersServiceFilterReq.md#fields)
- [runtime](SupplyOffersServiceFilterReq.md#runtime)
- [typeName](SupplyOffersServiceFilterReq.md#typename)

### Methods

- [clone](SupplyOffersServiceFilterReq.md#clone)
- [equals](SupplyOffersServiceFilterReq.md#equals)
- [fromBinary](SupplyOffersServiceFilterReq.md#frombinary)
- [fromJson](SupplyOffersServiceFilterReq.md#fromjson)
- [fromJsonString](SupplyOffersServiceFilterReq.md#fromjsonstring)
- [getType](SupplyOffersServiceFilterReq.md#gettype)
- [toBinary](SupplyOffersServiceFilterReq.md#tobinary)
- [toJSON](SupplyOffersServiceFilterReq.md#tojson)
- [toJson](SupplyOffersServiceFilterReq.md#tojson-1)
- [toJsonString](SupplyOffersServiceFilterReq.md#tojsonstring)
- [equals](SupplyOffersServiceFilterReq.md#equals-1)
- [fromBinary](SupplyOffersServiceFilterReq.md#frombinary-1)
- [fromJson](SupplyOffersServiceFilterReq.md#fromjson-1)
- [fromJsonString](SupplyOffersServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SupplyOffersServiceFilterReq**(`data?`): [`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)\> |

#### Returns

[`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)

#### Overrides

Message\&lt;SupplyOffersServiceFilterReq\&gt;.constructor

#### Defined in

src/supply_offers.scailo_pb.ts:1913

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/supply_offers.scailo_pb.ts:1799

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/supply_offers.scailo_pb.ts:1792

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/supply_offers.scailo_pb.ts:1785

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/supply_offers.scailo_pb.ts:1806

___

### buyerLocationId

• **buyerLocationId**: `bigint` = `protoInt64.zero`

The associated buyer location ID

**`Generated`**

from field: uint64 buyer_location_id = 23;

#### Defined in

src/supply_offers.scailo_pb.ts:1848

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/supply_offers.scailo_pb.ts:1820

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/supply_offers.scailo_pb.ts:1813

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The associated consignee location ID

**`Generated`**

from field: uint64 consignee_location_id = 22;

#### Defined in

src/supply_offers.scailo_pb.ts:1841

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/supply_offers.scailo_pb.ts:1715

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/supply_offers.scailo_pb.ts:1750

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/supply_offers.scailo_pb.ts:1743

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 25;

#### Defined in

src/supply_offers.scailo_pb.ts:1862

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of the item in the supply offer

**`Generated`**

from field: string delivery_date_end = 43;

#### Defined in

src/supply_offers.scailo_pb.ts:1897

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of the item in the supply offer

**`Generated`**

from field: string delivery_date_exact = 41;

#### Defined in

src/supply_offers.scailo_pb.ts:1883

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of the item in the supply offer

**`Generated`**

from field: string delivery_date_start = 42;

#### Defined in

src/supply_offers.scailo_pb.ts:1890

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/supply_offers.scailo_pb.ts:1771

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

src/supply_offers.scailo_pb.ts:1876

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/supply_offers.scailo_pb.ts:1834

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/supply_offers.scailo_pb.ts:1708

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/supply_offers.scailo_pb.ts:1764

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/supply_offers.scailo_pb.ts:1757

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/supply_offers.scailo_pb.ts:1722

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 26;

#### Defined in

src/supply_offers.scailo_pb.ts:1869

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the supply offer

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/supply_offers.scailo_pb.ts:1827

___

### sortKey

• **sortKey**: [`SUPPLY_OFFER_SORT_KEY`](../enums/SUPPLY_OFFER_SORT_KEY.md) = `SUPPLY_OFFER_SORT_KEY.SUPPLY_OFFER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SUPPLY_OFFER_SORT_KEY sort_key = 5;

#### Defined in

src/supply_offers.scailo_pb.ts:1736

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/supply_offers.scailo_pb.ts:1729

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this supply offer

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/supply_offers.scailo_pb.ts:1778

___

### totalValueMax

• **totalValueMax**: `bigint` = `protoInt64.zero`

Stores the maximum value of the supply offer (ignored if 0)

**`Generated`**

from field: uint64 total_value_max = 51;

#### Defined in

src/supply_offers.scailo_pb.ts:1911

___

### totalValueMin

• **totalValueMin**: `bigint` = `protoInt64.zero`

Stores the minimum value of the supply offer (ignored if 0)

**`Generated`**

from field: uint64 total_value_min = 50;

#### Defined in

src/supply_offers.scailo_pb.ts:1904

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 24;

#### Defined in

src/supply_offers.scailo_pb.ts:1855

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/supply_offers.scailo_pb.ts:1920

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/supply_offers.scailo_pb.ts:1918

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SupplyOffersServiceFilterReq"``

#### Defined in

src/supply_offers.scailo_pb.ts:1919

## Methods

### clone

▸ **clone**(): [`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)

Create a deep copy.

#### Returns

[`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md) \| `PlainMessage`\<[`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md) \| `PlainMessage`\<[`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)\> |
| `b` | `undefined` \| [`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md) \| `PlainMessage`\<[`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/supply_offers.scailo_pb.ts:1965

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)

#### Defined in

src/supply_offers.scailo_pb.ts:1953

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)

#### Defined in

src/supply_offers.scailo_pb.ts:1957

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)

#### Defined in

src/supply_offers.scailo_pb.ts:1961
