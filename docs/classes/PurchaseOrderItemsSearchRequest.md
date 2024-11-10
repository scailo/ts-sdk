[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseOrderItemsSearchRequest

# Class: PurchaseOrderItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.PurchaseOrderItemsSearchRequest

## Hierarchy

- `Message`\<[`PurchaseOrderItemsSearchRequest`](PurchaseOrderItemsSearchRequest.md)\>

  ↳ **`PurchaseOrderItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](PurchaseOrderItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](PurchaseOrderItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](PurchaseOrderItemsSearchRequest.md#approvedonend)
- [approvedOnStart](PurchaseOrderItemsSearchRequest.md#approvedonstart)
- [approverRoleId](PurchaseOrderItemsSearchRequest.md#approverroleid)
- [count](PurchaseOrderItemsSearchRequest.md#count)
- [deliveryDateEnd](PurchaseOrderItemsSearchRequest.md#deliverydateend)
- [deliveryDateExact](PurchaseOrderItemsSearchRequest.md#deliverydateexact)
- [deliveryDateStart](PurchaseOrderItemsSearchRequest.md#deliverydatestart)
- [entityUuid](PurchaseOrderItemsSearchRequest.md#entityuuid)
- [familyId](PurchaseOrderItemsSearchRequest.md#familyid)
- [isActive](PurchaseOrderItemsSearchRequest.md#isactive)
- [offset](PurchaseOrderItemsSearchRequest.md#offset)
- [purchaseOrderId](PurchaseOrderItemsSearchRequest.md#purchaseorderid)
- [searchKey](PurchaseOrderItemsSearchRequest.md#searchkey)
- [sortKey](PurchaseOrderItemsSearchRequest.md#sortkey)
- [sortOrder](PurchaseOrderItemsSearchRequest.md#sortorder)
- [status](PurchaseOrderItemsSearchRequest.md#status)
- [taxGroupId](PurchaseOrderItemsSearchRequest.md#taxgroupid)
- [vendorId](PurchaseOrderItemsSearchRequest.md#vendorid)
- [vendorUomId](PurchaseOrderItemsSearchRequest.md#vendoruomid)
- [fields](PurchaseOrderItemsSearchRequest.md#fields)
- [runtime](PurchaseOrderItemsSearchRequest.md#runtime)
- [typeName](PurchaseOrderItemsSearchRequest.md#typename)

### Methods

- [clone](PurchaseOrderItemsSearchRequest.md#clone)
- [equals](PurchaseOrderItemsSearchRequest.md#equals)
- [fromBinary](PurchaseOrderItemsSearchRequest.md#frombinary)
- [fromJson](PurchaseOrderItemsSearchRequest.md#fromjson)
- [fromJsonString](PurchaseOrderItemsSearchRequest.md#fromjsonstring)
- [getType](PurchaseOrderItemsSearchRequest.md#gettype)
- [toBinary](PurchaseOrderItemsSearchRequest.md#tobinary)
- [toJSON](PurchaseOrderItemsSearchRequest.md#tojson)
- [toJson](PurchaseOrderItemsSearchRequest.md#tojson-1)
- [toJsonString](PurchaseOrderItemsSearchRequest.md#tojsonstring)
- [equals](PurchaseOrderItemsSearchRequest.md#equals-1)
- [fromBinary](PurchaseOrderItemsSearchRequest.md#frombinary-1)
- [fromJson](PurchaseOrderItemsSearchRequest.md#fromjson-1)
- [fromJsonString](PurchaseOrderItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseOrderItemsSearchRequest**(`data?`): [`PurchaseOrderItemsSearchRequest`](PurchaseOrderItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseOrderItemsSearchRequest`](PurchaseOrderItemsSearchRequest.md)\> |

#### Returns

[`PurchaseOrderItemsSearchRequest`](PurchaseOrderItemsSearchRequest.md)

#### Overrides

Message\&lt;PurchaseOrderItemsSearchRequest\&gt;.constructor

#### Defined in

src/purchases_orders.scailo_pb.ts:2860

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

src/purchases_orders.scailo_pb.ts:2784

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

src/purchases_orders.scailo_pb.ts:2777

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

src/purchases_orders.scailo_pb.ts:2770

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

src/purchases_orders.scailo_pb.ts:2791

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/purchases_orders.scailo_pb.ts:2728

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of the item in the purchase order

**`Generated`**

from field: string delivery_date_end = 30;

#### Defined in

src/purchases_orders.scailo_pb.ts:2840

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of the item in the purchase order

**`Generated`**

from field: string delivery_date_exact = 28;

#### Defined in

src/purchases_orders.scailo_pb.ts:2826

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of the item in the purchase order

**`Generated`**

from field: string delivery_date_start = 29;

#### Defined in

src/purchases_orders.scailo_pb.ts:2833

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/purchases_orders.scailo_pb.ts:2756

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 21;

#### Defined in

src/purchases_orders.scailo_pb.ts:2805

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/purchases_orders.scailo_pb.ts:2721

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/purchases_orders.scailo_pb.ts:2735

___

### purchaseOrderId

• **purchaseOrderId**: `bigint` = `protoInt64.zero`

The ID of the purchase order

**`Generated`**

from field: uint64 purchase_order_id = 20;

#### Defined in

src/purchases_orders.scailo_pb.ts:2798

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

src/purchases_orders.scailo_pb.ts:2847

___

### sortKey

• **sortKey**: [`PURCHASE_ORDER_ITEM_SORT_KEY`](../enums/PURCHASE_ORDER_ITEM_SORT_KEY.md) = `PURCHASE_ORDER_ITEM_SORT_KEY.PURCHASE_ORDER_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.PURCHASE_ORDER_ITEM_SORT_KEY sort_key = 5;

#### Defined in

src/purchases_orders.scailo_pb.ts:2749

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/purchases_orders.scailo_pb.ts:2742

___

### status

• **status**: [`PURCHASE_ORDER_ITEM_STATUS`](../enums/PURCHASE_ORDER_ITEM_STATUS.md) = `PURCHASE_ORDER_ITEM_STATUS.PURCHASE_ORDER_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.PURCHASE_ORDER_ITEM_STATUS status = 7;

#### Defined in

src/purchases_orders.scailo_pb.ts:2763

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the tax group

**`Generated`**

from field: uint64 tax_group_id = 23;

#### Defined in

src/purchases_orders.scailo_pb.ts:2819

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

------------------------------------------
Extra filters
The ID of the associated vendor

------------------------------------------

**`Generated`**

from field: uint64 vendor_id = 200;

#### Defined in

src/purchases_orders.scailo_pb.ts:2858

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

The ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 22;

#### Defined in

src/purchases_orders.scailo_pb.ts:2812

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_orders.scailo_pb.ts:2867

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_orders.scailo_pb.ts:2865

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseOrderItemsSearchRequest"``

#### Defined in

src/purchases_orders.scailo_pb.ts:2866

## Methods

### clone

▸ **clone**(): [`PurchaseOrderItemsSearchRequest`](PurchaseOrderItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`PurchaseOrderItemsSearchRequest`](PurchaseOrderItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseOrderItemsSearchRequest`](PurchaseOrderItemsSearchRequest.md) \| `PlainMessage`\<[`PurchaseOrderItemsSearchRequest`](PurchaseOrderItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseOrderItemsSearchRequest`](PurchaseOrderItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseOrderItemsSearchRequest`](PurchaseOrderItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`PurchaseOrderItemsSearchRequest`](PurchaseOrderItemsSearchRequest.md) \| `PlainMessage`\<[`PurchaseOrderItemsSearchRequest`](PurchaseOrderItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`PurchaseOrderItemsSearchRequest`](PurchaseOrderItemsSearchRequest.md) \| `PlainMessage`\<[`PurchaseOrderItemsSearchRequest`](PurchaseOrderItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_orders.scailo_pb.ts:2902

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseOrderItemsSearchRequest`](PurchaseOrderItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseOrderItemsSearchRequest`](PurchaseOrderItemsSearchRequest.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:2890

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseOrderItemsSearchRequest`](PurchaseOrderItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderItemsSearchRequest`](PurchaseOrderItemsSearchRequest.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:2894

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseOrderItemsSearchRequest`](PurchaseOrderItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderItemsSearchRequest`](PurchaseOrderItemsSearchRequest.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:2898
