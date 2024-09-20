[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesOrdersServiceItemUpdateRequest

# Class: PurchasesOrdersServiceItemUpdateRequest

Describes the parameters required to update an item in a purchase order

**`Generated`**

from message Scailo.PurchasesOrdersServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`PurchasesOrdersServiceItemUpdateRequest`](PurchasesOrdersServiceItemUpdateRequest.md)\>

  ↳ **`PurchasesOrdersServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](PurchasesOrdersServiceItemUpdateRequest.md#constructor)

### Properties

- [deliveryDate](PurchasesOrdersServiceItemUpdateRequest.md#deliverydate)
- [discount](PurchasesOrdersServiceItemUpdateRequest.md#discount)
- [id](PurchasesOrdersServiceItemUpdateRequest.md#id)
- [internalQuantity](PurchasesOrdersServiceItemUpdateRequest.md#internalquantity)
- [specifications](PurchasesOrdersServiceItemUpdateRequest.md#specifications)
- [taxGroupId](PurchasesOrdersServiceItemUpdateRequest.md#taxgroupid)
- [userComment](PurchasesOrdersServiceItemUpdateRequest.md#usercomment)
- [vendorQuantity](PurchasesOrdersServiceItemUpdateRequest.md#vendorquantity)
- [vendorUnitPrice](PurchasesOrdersServiceItemUpdateRequest.md#vendorunitprice)
- [vendorUomId](PurchasesOrdersServiceItemUpdateRequest.md#vendoruomid)
- [fields](PurchasesOrdersServiceItemUpdateRequest.md#fields)
- [runtime](PurchasesOrdersServiceItemUpdateRequest.md#runtime)
- [typeName](PurchasesOrdersServiceItemUpdateRequest.md#typename)

### Methods

- [clone](PurchasesOrdersServiceItemUpdateRequest.md#clone)
- [equals](PurchasesOrdersServiceItemUpdateRequest.md#equals)
- [fromBinary](PurchasesOrdersServiceItemUpdateRequest.md#frombinary)
- [fromJson](PurchasesOrdersServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](PurchasesOrdersServiceItemUpdateRequest.md#fromjsonstring)
- [getType](PurchasesOrdersServiceItemUpdateRequest.md#gettype)
- [toBinary](PurchasesOrdersServiceItemUpdateRequest.md#tobinary)
- [toJSON](PurchasesOrdersServiceItemUpdateRequest.md#tojson)
- [toJson](PurchasesOrdersServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](PurchasesOrdersServiceItemUpdateRequest.md#tojsonstring)
- [equals](PurchasesOrdersServiceItemUpdateRequest.md#equals-1)
- [fromBinary](PurchasesOrdersServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](PurchasesOrdersServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](PurchasesOrdersServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesOrdersServiceItemUpdateRequest**(`data?`): [`PurchasesOrdersServiceItemUpdateRequest`](PurchasesOrdersServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesOrdersServiceItemUpdateRequest`](PurchasesOrdersServiceItemUpdateRequest.md)\> |

#### Returns

[`PurchasesOrdersServiceItemUpdateRequest`](PurchasesOrdersServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;PurchasesOrdersServiceItemUpdateRequest\&gt;.constructor

#### Defined in

src/purchases_orders.scailo_pb.ts:1275

## Properties

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 18;

#### Defined in

src/purchases_orders.scailo_pb.ts:1266

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

The applicable discount percentage (in cents)

**`Generated`**

from field: uint64 discount = 17;

#### Defined in

src/purchases_orders.scailo_pb.ts:1259

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/purchases_orders.scailo_pb.ts:1217

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being ordered in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/purchases_orders.scailo_pb.ts:1224

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 19;

#### Defined in

src/purchases_orders.scailo_pb.ts:1273

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 16;

#### Defined in

src/purchases_orders.scailo_pb.ts:1252

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/purchases_orders.scailo_pb.ts:1210

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being ordered in vendor's unit of material

**`Generated`**

from field: uint64 vendor_quantity = 14;

#### Defined in

src/purchases_orders.scailo_pb.ts:1238

___

### vendorUnitPrice

• **vendorUnitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied by the vendor)

**`Generated`**

from field: uint64 vendor_unit_price = 15;

#### Defined in

src/purchases_orders.scailo_pb.ts:1245

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 13;

#### Defined in

src/purchases_orders.scailo_pb.ts:1231

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_orders.scailo_pb.ts:1282

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_orders.scailo_pb.ts:1280

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesOrdersServiceItemUpdateRequest"``

#### Defined in

src/purchases_orders.scailo_pb.ts:1281

## Methods

### clone

▸ **clone**(): [`PurchasesOrdersServiceItemUpdateRequest`](PurchasesOrdersServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`PurchasesOrdersServiceItemUpdateRequest`](PurchasesOrdersServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesOrdersServiceItemUpdateRequest`](PurchasesOrdersServiceItemUpdateRequest.md) \| `PlainMessage`\<[`PurchasesOrdersServiceItemUpdateRequest`](PurchasesOrdersServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesOrdersServiceItemUpdateRequest`](PurchasesOrdersServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesOrdersServiceItemUpdateRequest`](PurchasesOrdersServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`PurchasesOrdersServiceItemUpdateRequest`](PurchasesOrdersServiceItemUpdateRequest.md) \| `PlainMessage`\<[`PurchasesOrdersServiceItemUpdateRequest`](PurchasesOrdersServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`PurchasesOrdersServiceItemUpdateRequest`](PurchasesOrdersServiceItemUpdateRequest.md) \| `PlainMessage`\<[`PurchasesOrdersServiceItemUpdateRequest`](PurchasesOrdersServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_orders.scailo_pb.ts:1307

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesOrdersServiceItemUpdateRequest`](PurchasesOrdersServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceItemUpdateRequest`](PurchasesOrdersServiceItemUpdateRequest.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:1295

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesOrdersServiceItemUpdateRequest`](PurchasesOrdersServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceItemUpdateRequest`](PurchasesOrdersServiceItemUpdateRequest.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:1299

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesOrdersServiceItemUpdateRequest`](PurchasesOrdersServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceItemUpdateRequest`](PurchasesOrdersServiceItemUpdateRequest.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:1303
