[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesOrdersServiceItemCreateRequest

# Class: PurchasesOrdersServiceItemCreateRequest

Describes the parameters required to add an item to a purchase order

**`Generated`**

from message Scailo.PurchasesOrdersServiceItemCreateRequest

## Hierarchy

- `Message`\<[`PurchasesOrdersServiceItemCreateRequest`](PurchasesOrdersServiceItemCreateRequest.md)\>

  ↳ **`PurchasesOrdersServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](PurchasesOrdersServiceItemCreateRequest.md#constructor)

### Properties

- [deliveryDate](PurchasesOrdersServiceItemCreateRequest.md#deliverydate)
- [discount](PurchasesOrdersServiceItemCreateRequest.md#discount)
- [familyId](PurchasesOrdersServiceItemCreateRequest.md#familyid)
- [internalQuantity](PurchasesOrdersServiceItemCreateRequest.md#internalquantity)
- [purchaseOrderId](PurchasesOrdersServiceItemCreateRequest.md#purchaseorderid)
- [specifications](PurchasesOrdersServiceItemCreateRequest.md#specifications)
- [taxGroupId](PurchasesOrdersServiceItemCreateRequest.md#taxgroupid)
- [userComment](PurchasesOrdersServiceItemCreateRequest.md#usercomment)
- [vendorQuantity](PurchasesOrdersServiceItemCreateRequest.md#vendorquantity)
- [vendorUnitPrice](PurchasesOrdersServiceItemCreateRequest.md#vendorunitprice)
- [vendorUomId](PurchasesOrdersServiceItemCreateRequest.md#vendoruomid)
- [fields](PurchasesOrdersServiceItemCreateRequest.md#fields)
- [runtime](PurchasesOrdersServiceItemCreateRequest.md#runtime)
- [typeName](PurchasesOrdersServiceItemCreateRequest.md#typename)

### Methods

- [clone](PurchasesOrdersServiceItemCreateRequest.md#clone)
- [equals](PurchasesOrdersServiceItemCreateRequest.md#equals)
- [fromBinary](PurchasesOrdersServiceItemCreateRequest.md#frombinary)
- [fromJson](PurchasesOrdersServiceItemCreateRequest.md#fromjson)
- [fromJsonString](PurchasesOrdersServiceItemCreateRequest.md#fromjsonstring)
- [getType](PurchasesOrdersServiceItemCreateRequest.md#gettype)
- [toBinary](PurchasesOrdersServiceItemCreateRequest.md#tobinary)
- [toJSON](PurchasesOrdersServiceItemCreateRequest.md#tojson)
- [toJson](PurchasesOrdersServiceItemCreateRequest.md#tojson-1)
- [toJsonString](PurchasesOrdersServiceItemCreateRequest.md#tojsonstring)
- [equals](PurchasesOrdersServiceItemCreateRequest.md#equals-1)
- [fromBinary](PurchasesOrdersServiceItemCreateRequest.md#frombinary-1)
- [fromJson](PurchasesOrdersServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](PurchasesOrdersServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesOrdersServiceItemCreateRequest**(`data?`): [`PurchasesOrdersServiceItemCreateRequest`](PurchasesOrdersServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesOrdersServiceItemCreateRequest`](PurchasesOrdersServiceItemCreateRequest.md)\> |

#### Returns

[`PurchasesOrdersServiceItemCreateRequest`](PurchasesOrdersServiceItemCreateRequest.md)

#### Overrides

Message\&lt;PurchasesOrdersServiceItemCreateRequest\&gt;.constructor

#### Defined in

src/purchases_orders.scailo_pb.ts:1160

## Properties

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 18;

#### Defined in

src/purchases_orders.scailo_pb.ts:1151

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

The applicable discount percentage (in cents)

**`Generated`**

from field: uint64 discount = 17;

#### Defined in

src/purchases_orders.scailo_pb.ts:1144

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/purchases_orders.scailo_pb.ts:1102

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being ordered in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/purchases_orders.scailo_pb.ts:1109

___

### purchaseOrderId

• **purchaseOrderId**: `bigint` = `protoInt64.zero`

Stores the purchase order ID

**`Generated`**

from field: uint64 purchase_order_id = 10;

#### Defined in

src/purchases_orders.scailo_pb.ts:1095

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 19;

#### Defined in

src/purchases_orders.scailo_pb.ts:1158

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 16;

#### Defined in

src/purchases_orders.scailo_pb.ts:1137

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/purchases_orders.scailo_pb.ts:1088

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being ordered in vendor's unit of material

**`Generated`**

from field: uint64 vendor_quantity = 14;

#### Defined in

src/purchases_orders.scailo_pb.ts:1123

___

### vendorUnitPrice

• **vendorUnitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied by the vendor)

**`Generated`**

from field: uint64 vendor_unit_price = 15;

#### Defined in

src/purchases_orders.scailo_pb.ts:1130

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 13;

#### Defined in

src/purchases_orders.scailo_pb.ts:1116

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_orders.scailo_pb.ts:1167

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_orders.scailo_pb.ts:1165

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesOrdersServiceItemCreateRequest"``

#### Defined in

src/purchases_orders.scailo_pb.ts:1166

## Methods

### clone

▸ **clone**(): [`PurchasesOrdersServiceItemCreateRequest`](PurchasesOrdersServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`PurchasesOrdersServiceItemCreateRequest`](PurchasesOrdersServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesOrdersServiceItemCreateRequest`](PurchasesOrdersServiceItemCreateRequest.md) \| `PlainMessage`\<[`PurchasesOrdersServiceItemCreateRequest`](PurchasesOrdersServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesOrdersServiceItemCreateRequest`](PurchasesOrdersServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesOrdersServiceItemCreateRequest`](PurchasesOrdersServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`PurchasesOrdersServiceItemCreateRequest`](PurchasesOrdersServiceItemCreateRequest.md) \| `PlainMessage`\<[`PurchasesOrdersServiceItemCreateRequest`](PurchasesOrdersServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`PurchasesOrdersServiceItemCreateRequest`](PurchasesOrdersServiceItemCreateRequest.md) \| `PlainMessage`\<[`PurchasesOrdersServiceItemCreateRequest`](PurchasesOrdersServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_orders.scailo_pb.ts:1193

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesOrdersServiceItemCreateRequest`](PurchasesOrdersServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceItemCreateRequest`](PurchasesOrdersServiceItemCreateRequest.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:1181

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesOrdersServiceItemCreateRequest`](PurchasesOrdersServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceItemCreateRequest`](PurchasesOrdersServiceItemCreateRequest.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:1185

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesOrdersServiceItemCreateRequest`](PurchasesOrdersServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceItemCreateRequest`](PurchasesOrdersServiceItemCreateRequest.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:1189
