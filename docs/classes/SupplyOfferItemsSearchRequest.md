[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SupplyOfferItemsSearchRequest

# Class: SupplyOfferItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.SupplyOfferItemsSearchRequest

## Hierarchy

- `Message`\<[`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)\>

  ↳ **`SupplyOfferItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](SupplyOfferItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](SupplyOfferItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](SupplyOfferItemsSearchRequest.md#approvedonend)
- [approvedOnStart](SupplyOfferItemsSearchRequest.md#approvedonstart)
- [approverRoleId](SupplyOfferItemsSearchRequest.md#approverroleid)
- [count](SupplyOfferItemsSearchRequest.md#count)
- [deliveryDateEnd](SupplyOfferItemsSearchRequest.md#deliverydateend)
- [deliveryDateExact](SupplyOfferItemsSearchRequest.md#deliverydateexact)
- [deliveryDateStart](SupplyOfferItemsSearchRequest.md#deliverydatestart)
- [entityUuid](SupplyOfferItemsSearchRequest.md#entityuuid)
- [familyId](SupplyOfferItemsSearchRequest.md#familyid)
- [isActive](SupplyOfferItemsSearchRequest.md#isactive)
- [offset](SupplyOfferItemsSearchRequest.md#offset)
- [searchKey](SupplyOfferItemsSearchRequest.md#searchkey)
- [sortKey](SupplyOfferItemsSearchRequest.md#sortkey)
- [sortOrder](SupplyOfferItemsSearchRequest.md#sortorder)
- [status](SupplyOfferItemsSearchRequest.md#status)
- [supplyOfferId](SupplyOfferItemsSearchRequest.md#supplyofferid)
- [taxGroupId](SupplyOfferItemsSearchRequest.md#taxgroupid)
- [vendorUomId](SupplyOfferItemsSearchRequest.md#vendoruomid)
- [fields](SupplyOfferItemsSearchRequest.md#fields)
- [runtime](SupplyOfferItemsSearchRequest.md#runtime)
- [typeName](SupplyOfferItemsSearchRequest.md#typename)

### Methods

- [clone](SupplyOfferItemsSearchRequest.md#clone)
- [equals](SupplyOfferItemsSearchRequest.md#equals)
- [fromBinary](SupplyOfferItemsSearchRequest.md#frombinary)
- [fromJson](SupplyOfferItemsSearchRequest.md#fromjson)
- [fromJsonString](SupplyOfferItemsSearchRequest.md#fromjsonstring)
- [getType](SupplyOfferItemsSearchRequest.md#gettype)
- [toBinary](SupplyOfferItemsSearchRequest.md#tobinary)
- [toJSON](SupplyOfferItemsSearchRequest.md#tojson)
- [toJson](SupplyOfferItemsSearchRequest.md#tojson-1)
- [toJsonString](SupplyOfferItemsSearchRequest.md#tojsonstring)
- [equals](SupplyOfferItemsSearchRequest.md#equals-1)
- [fromBinary](SupplyOfferItemsSearchRequest.md#frombinary-1)
- [fromJson](SupplyOfferItemsSearchRequest.md#fromjson-1)
- [fromJsonString](SupplyOfferItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SupplyOfferItemsSearchRequest**(`data?`): [`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)\> |

#### Returns

[`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)

#### Overrides

Message\&lt;SupplyOfferItemsSearchRequest\&gt;.constructor

#### Defined in

src/supply_offers.scailo_pb.ts:2490

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

src/supply_offers.scailo_pb.ts:2425

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

src/supply_offers.scailo_pb.ts:2418

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

src/supply_offers.scailo_pb.ts:2411

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

src/supply_offers.scailo_pb.ts:2432

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/supply_offers.scailo_pb.ts:2369

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of the item in the supply offer

**`Generated`**

from field: string delivery_date_end = 30;

#### Defined in

src/supply_offers.scailo_pb.ts:2481

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of the item in the supply offer

**`Generated`**

from field: string delivery_date_exact = 28;

#### Defined in

src/supply_offers.scailo_pb.ts:2467

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of the item in the supply offer

**`Generated`**

from field: string delivery_date_start = 29;

#### Defined in

src/supply_offers.scailo_pb.ts:2474

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/supply_offers.scailo_pb.ts:2397

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 21;

#### Defined in

src/supply_offers.scailo_pb.ts:2446

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/supply_offers.scailo_pb.ts:2362

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/supply_offers.scailo_pb.ts:2376

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

src/supply_offers.scailo_pb.ts:2488

___

### sortKey

• **sortKey**: [`SUPPLY_OFFER_ITEM_SORT_KEY`](../enums/SUPPLY_OFFER_ITEM_SORT_KEY.md) = `SUPPLY_OFFER_ITEM_SORT_KEY.SUPPLY_OFFER_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SUPPLY_OFFER_ITEM_SORT_KEY sort_key = 5;

#### Defined in

src/supply_offers.scailo_pb.ts:2390

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/supply_offers.scailo_pb.ts:2383

___

### status

• **status**: [`SUPPLY_OFFER_ITEM_STATUS`](../enums/SUPPLY_OFFER_ITEM_STATUS.md) = `SUPPLY_OFFER_ITEM_STATUS.SUPPLY_OFFER_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.SUPPLY_OFFER_ITEM_STATUS status = 7;

#### Defined in

src/supply_offers.scailo_pb.ts:2404

___

### supplyOfferId

• **supplyOfferId**: `bigint` = `protoInt64.zero`

The ID of the supply offer

**`Generated`**

from field: uint64 supply_offer_id = 20;

#### Defined in

src/supply_offers.scailo_pb.ts:2439

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the tax group

**`Generated`**

from field: uint64 tax_group_id = 23;

#### Defined in

src/supply_offers.scailo_pb.ts:2460

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

The ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 22;

#### Defined in

src/supply_offers.scailo_pb.ts:2453

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/supply_offers.scailo_pb.ts:2497

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/supply_offers.scailo_pb.ts:2495

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SupplyOfferItemsSearchRequest"``

#### Defined in

src/supply_offers.scailo_pb.ts:2496

## Methods

### clone

▸ **clone**(): [`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md) \| `PlainMessage`\<[`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md) \| `PlainMessage`\<[`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md) \| `PlainMessage`\<[`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/supply_offers.scailo_pb.ts:2531

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)

#### Defined in

src/supply_offers.scailo_pb.ts:2519

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)

#### Defined in

src/supply_offers.scailo_pb.ts:2523

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)

#### Defined in

src/supply_offers.scailo_pb.ts:2527
