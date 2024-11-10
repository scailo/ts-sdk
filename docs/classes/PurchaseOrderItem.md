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

src/purchases_orders.scailo_pb.ts:1448

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/purchases_orders.scailo_pb.ts:1338

___

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 18;

#### Defined in

src/purchases_orders.scailo_pb.ts:1415

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

The applicable discount percentage (in cents)

**`Generated`**

from field: uint64 discount = 17;

#### Defined in

src/purchases_orders.scailo_pb.ts:1408

___

### discountedVendorUnitPrice

• **discountedVendorUnitPrice**: `bigint` = `protoInt64.zero`

Stores the vendor unit price after factoring in the discount

**`Generated`**

from field: uint64 discounted_vendor_unit_price = 30;

#### Defined in

src/purchases_orders.scailo_pb.ts:1429

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/purchases_orders.scailo_pb.ts:1324

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/purchases_orders.scailo_pb.ts:1366

___

### familyUuid

• **familyUuid**: `string` = `""`

The UUID of the associated family

----------------------------------------

**`Generated`**

from field: string family_uuid = 111;

#### Defined in

src/purchases_orders.scailo_pb.ts:1446

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being ordered in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/purchases_orders.scailo_pb.ts:1373

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this purchase order

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/purchases_orders.scailo_pb.ts:1331

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/purchases_orders.scailo_pb.ts:1345

___

### purchaseOrderId

• **purchaseOrderId**: `bigint` = `protoInt64.zero`

Stores the purchase order ID

**`Generated`**

from field: uint64 purchase_order_id = 10;

#### Defined in

src/purchases_orders.scailo_pb.ts:1359

___

### purchaseOrderUuid

• **purchaseOrderUuid**: `string` = `""`

----------------------------------------
The UUID of the associated purchase order

**`Generated`**

from field: string purchase_order_uuid = 110;

#### Defined in

src/purchases_orders.scailo_pb.ts:1437

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 19;

#### Defined in

src/purchases_orders.scailo_pb.ts:1422

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 16;

#### Defined in

src/purchases_orders.scailo_pb.ts:1401

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/purchases_orders.scailo_pb.ts:1352

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being ordered in vendor's unit of material

**`Generated`**

from field: uint64 vendor_quantity = 14;

#### Defined in

src/purchases_orders.scailo_pb.ts:1387

___

### vendorUnitPrice

• **vendorUnitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied by the vendor)

**`Generated`**

from field: uint64 vendor_unit_price = 15;

#### Defined in

src/purchases_orders.scailo_pb.ts:1394

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 13;

#### Defined in

src/purchases_orders.scailo_pb.ts:1380

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_orders.scailo_pb.ts:1455

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_orders.scailo_pb.ts:1453

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseOrderItem"``

#### Defined in

src/purchases_orders.scailo_pb.ts:1454

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

src/purchases_orders.scailo_pb.ts:1488

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

src/purchases_orders.scailo_pb.ts:1476

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

src/purchases_orders.scailo_pb.ts:1480

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

src/purchases_orders.scailo_pb.ts:1484
