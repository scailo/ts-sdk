[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseOrderItem

# Class: PurchaseOrderItem

Describes the parameters that constitute an item associated to a purchase order

**`Generated`**

from message Scailo.PurchaseOrderItem

## Hierarchy

- `Message`\<[`PurchaseOrderItem`](PurchaseOrderItem.md)\>

  ↳ **`PurchaseOrderItem`**

## Table of contents

### Constructors

- [constructor](PurchaseOrderItem.md#constructor)

### Properties

- [approvalMetadata](PurchaseOrderItem.md#approvalmetadata)
- [deliveryDate](PurchaseOrderItem.md#deliverydate)
- [discount](PurchaseOrderItem.md#discount)
- [discountedVendorUnitPrice](PurchaseOrderItem.md#discountedvendorunitprice)
- [entityUuid](PurchaseOrderItem.md#entityuuid)
- [familyId](PurchaseOrderItem.md#familyid)
- [familyUuid](PurchaseOrderItem.md#familyuuid)
- [internalQuantity](PurchaseOrderItem.md#internalquantity)
- [metadata](PurchaseOrderItem.md#metadata)
- [needApproval](PurchaseOrderItem.md#needapproval)
- [purchaseOrderId](PurchaseOrderItem.md#purchaseorderid)
- [purchaseOrderUuid](PurchaseOrderItem.md#purchaseorderuuid)
- [specifications](PurchaseOrderItem.md#specifications)
- [taxGroupId](PurchaseOrderItem.md#taxgroupid)
- [userComment](PurchaseOrderItem.md#usercomment)
- [vendorQuantity](PurchaseOrderItem.md#vendorquantity)
- [vendorUnitPrice](PurchaseOrderItem.md#vendorunitprice)
- [vendorUomId](PurchaseOrderItem.md#vendoruomid)
- [fields](PurchaseOrderItem.md#fields)
- [runtime](PurchaseOrderItem.md#runtime)
- [typeName](PurchaseOrderItem.md#typename)

### Methods

- [clone](PurchaseOrderItem.md#clone)
- [equals](PurchaseOrderItem.md#equals)
- [fromBinary](PurchaseOrderItem.md#frombinary)
- [fromJson](PurchaseOrderItem.md#fromjson)
- [fromJsonString](PurchaseOrderItem.md#fromjsonstring)
- [getType](PurchaseOrderItem.md#gettype)
- [toBinary](PurchaseOrderItem.md#tobinary)
- [toJSON](PurchaseOrderItem.md#tojson)
- [toJson](PurchaseOrderItem.md#tojson-1)
- [toJsonString](PurchaseOrderItem.md#tojsonstring)
- [equals](PurchaseOrderItem.md#equals-1)
- [fromBinary](PurchaseOrderItem.md#frombinary-1)
- [fromJson](PurchaseOrderItem.md#fromjson-1)
- [fromJsonString](PurchaseOrderItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseOrderItem**(`data?`): [`PurchaseOrderItem`](PurchaseOrderItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseOrderItem`](PurchaseOrderItem.md)\> |

#### Returns

[`PurchaseOrderItem`](PurchaseOrderItem.md)

#### Overrides

Message\&lt;PurchaseOrderItem\&gt;.constructor

#### Defined in

[src/purchases_orders.scailo_pb.ts:1839](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L1839)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1724](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L1724)

___

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 18;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1806](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L1806)

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

The applicable discount percentage (in cents)

**`Generated`**

from field: uint64 discount = 17;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1799](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L1799)

___

### discountedVendorUnitPrice

• **discountedVendorUnitPrice**: `bigint` = `protoInt64.zero`

Stores the vendor unit price after factoring in the discount

**`Generated`**

from field: uint64 discounted_vendor_unit_price = 30;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1820](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L1820)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1708](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L1708)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1757](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L1757)

___

### familyUuid

• **familyUuid**: `string` = `""`

The UUID of the associated family

----------------------------------------

**`Generated`**

from field: string family_uuid = 111;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1837](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L1837)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being ordered in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1764](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L1764)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1716](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L1716)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

A boolean flag indicating whether this specific record requires further administrative approval.

**`Example`**

```ts
false
```

**`Format`**

Boolean true or false.

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1736](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L1736)

___

### purchaseOrderId

• **purchaseOrderId**: `bigint` = `protoInt64.zero`

Stores the purchase order ID

**`Generated`**

from field: uint64 purchase_order_id = 10;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1750](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L1750)

___

### purchaseOrderUuid

• **purchaseOrderUuid**: `string` = `""`

----------------------------------------
The UUID of the associated purchase order

**`Generated`**

from field: string purchase_order_uuid = 110;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1828](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L1828)

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 19;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1813](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L1813)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 16;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1792](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L1792)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1743](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L1743)

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being ordered in vendor's unit of material

**`Generated`**

from field: uint64 vendor_quantity = 14;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1778](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L1778)

___

### vendorUnitPrice

• **vendorUnitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied by the vendor)

**`Generated`**

from field: uint64 vendor_unit_price = 15;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1785](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L1785)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 13;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1771](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L1771)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_orders.scailo_pb.ts:1846](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L1846)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_orders.scailo_pb.ts:1844](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L1844)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseOrderItem"``

#### Defined in

[src/purchases_orders.scailo_pb.ts:1845](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L1845)

## Methods

### clone

▸ **clone**(): [`PurchaseOrderItem`](PurchaseOrderItem.md)

Create a deep copy.

#### Returns

[`PurchaseOrderItem`](PurchaseOrderItem.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseOrderItem`](PurchaseOrderItem.md) \| `PlainMessage`\<[`PurchaseOrderItem`](PurchaseOrderItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseOrderItem`](PurchaseOrderItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseOrderItem`](PurchaseOrderItem.md)\>

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
| `a` | `undefined` \| [`PurchaseOrderItem`](PurchaseOrderItem.md) \| `PlainMessage`\<[`PurchaseOrderItem`](PurchaseOrderItem.md)\> |
| `b` | `undefined` \| [`PurchaseOrderItem`](PurchaseOrderItem.md) \| `PlainMessage`\<[`PurchaseOrderItem`](PurchaseOrderItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_orders.scailo_pb.ts:1879](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L1879)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseOrderItem`](PurchaseOrderItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseOrderItem`](PurchaseOrderItem.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:1867](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L1867)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseOrderItem`](PurchaseOrderItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderItem`](PurchaseOrderItem.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:1871](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L1871)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseOrderItem`](PurchaseOrderItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderItem`](PurchaseOrderItem.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:1875](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L1875)
