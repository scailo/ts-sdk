[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesOrdersServiceMultipleItemsSingleton

# Class: PurchasesOrdersServiceMultipleItemsSingleton

Describes the parameters required to add an individual item as part of multiple item addition to a purchase order

**`Generated`**

from message Scailo.PurchasesOrdersServiceMultipleItemsSingleton

## Hierarchy

- `Message`\<[`PurchasesOrdersServiceMultipleItemsSingleton`](PurchasesOrdersServiceMultipleItemsSingleton.md)\>

  ↳ **`PurchasesOrdersServiceMultipleItemsSingleton`**

## Table of contents

### Constructors

- [constructor](PurchasesOrdersServiceMultipleItemsSingleton.md#constructor)

### Properties

- [deliveryDate](PurchasesOrdersServiceMultipleItemsSingleton.md#deliverydate)
- [discount](PurchasesOrdersServiceMultipleItemsSingleton.md#discount)
- [familyId](PurchasesOrdersServiceMultipleItemsSingleton.md#familyid)
- [internalQuantity](PurchasesOrdersServiceMultipleItemsSingleton.md#internalquantity)
- [specifications](PurchasesOrdersServiceMultipleItemsSingleton.md#specifications)
- [taxGroupId](PurchasesOrdersServiceMultipleItemsSingleton.md#taxgroupid)
- [vendorQuantity](PurchasesOrdersServiceMultipleItemsSingleton.md#vendorquantity)
- [vendorUnitPrice](PurchasesOrdersServiceMultipleItemsSingleton.md#vendorunitprice)
- [vendorUomId](PurchasesOrdersServiceMultipleItemsSingleton.md#vendoruomid)
- [fields](PurchasesOrdersServiceMultipleItemsSingleton.md#fields)
- [runtime](PurchasesOrdersServiceMultipleItemsSingleton.md#runtime)
- [typeName](PurchasesOrdersServiceMultipleItemsSingleton.md#typename)

### Methods

- [clone](PurchasesOrdersServiceMultipleItemsSingleton.md#clone)
- [equals](PurchasesOrdersServiceMultipleItemsSingleton.md#equals)
- [fromBinary](PurchasesOrdersServiceMultipleItemsSingleton.md#frombinary)
- [fromJson](PurchasesOrdersServiceMultipleItemsSingleton.md#fromjson)
- [fromJsonString](PurchasesOrdersServiceMultipleItemsSingleton.md#fromjsonstring)
- [getType](PurchasesOrdersServiceMultipleItemsSingleton.md#gettype)
- [toBinary](PurchasesOrdersServiceMultipleItemsSingleton.md#tobinary)
- [toJSON](PurchasesOrdersServiceMultipleItemsSingleton.md#tojson)
- [toJson](PurchasesOrdersServiceMultipleItemsSingleton.md#tojson-1)
- [toJsonString](PurchasesOrdersServiceMultipleItemsSingleton.md#tojsonstring)
- [equals](PurchasesOrdersServiceMultipleItemsSingleton.md#equals-1)
- [fromBinary](PurchasesOrdersServiceMultipleItemsSingleton.md#frombinary-1)
- [fromJson](PurchasesOrdersServiceMultipleItemsSingleton.md#fromjson-1)
- [fromJsonString](PurchasesOrdersServiceMultipleItemsSingleton.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesOrdersServiceMultipleItemsSingleton**(`data?`): [`PurchasesOrdersServiceMultipleItemsSingleton`](PurchasesOrdersServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesOrdersServiceMultipleItemsSingleton`](PurchasesOrdersServiceMultipleItemsSingleton.md)\> |

#### Returns

[`PurchasesOrdersServiceMultipleItemsSingleton`](PurchasesOrdersServiceMultipleItemsSingleton.md)

#### Overrides

Message\&lt;PurchasesOrdersServiceMultipleItemsSingleton\&gt;.constructor

#### Defined in

[src/purchases_orders.scailo_pb.ts:1400](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1400)

## Properties

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 18;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1391](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1391)

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

The applicable discount percentage (in cents)

**`Generated`**

from field: uint64 discount = 17;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1384](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1384)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1342](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1342)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being ordered in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1349](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1349)

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 19;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1398](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1398)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 16;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1377](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1377)

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being ordered in vendor's unit of material

**`Generated`**

from field: uint64 vendor_quantity = 14;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1363](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1363)

___

### vendorUnitPrice

• **vendorUnitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied by the vendor)

**`Generated`**

from field: uint64 vendor_unit_price = 15;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1370](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1370)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 13;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1356](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1356)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_orders.scailo_pb.ts:1407](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1407)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_orders.scailo_pb.ts:1405](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1405)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesOrdersServiceMultipleItemsSingleton"``

#### Defined in

[src/purchases_orders.scailo_pb.ts:1406](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1406)

## Methods

### clone

▸ **clone**(): [`PurchasesOrdersServiceMultipleItemsSingleton`](PurchasesOrdersServiceMultipleItemsSingleton.md)

Create a deep copy.

#### Returns

[`PurchasesOrdersServiceMultipleItemsSingleton`](PurchasesOrdersServiceMultipleItemsSingleton.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesOrdersServiceMultipleItemsSingleton`](PurchasesOrdersServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`PurchasesOrdersServiceMultipleItemsSingleton`](PurchasesOrdersServiceMultipleItemsSingleton.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesOrdersServiceMultipleItemsSingleton`](PurchasesOrdersServiceMultipleItemsSingleton.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesOrdersServiceMultipleItemsSingleton`](PurchasesOrdersServiceMultipleItemsSingleton.md)\>

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
| `a` | `undefined` \| [`PurchasesOrdersServiceMultipleItemsSingleton`](PurchasesOrdersServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`PurchasesOrdersServiceMultipleItemsSingleton`](PurchasesOrdersServiceMultipleItemsSingleton.md)\> |
| `b` | `undefined` \| [`PurchasesOrdersServiceMultipleItemsSingleton`](PurchasesOrdersServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`PurchasesOrdersServiceMultipleItemsSingleton`](PurchasesOrdersServiceMultipleItemsSingleton.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_orders.scailo_pb.ts:1431](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1431)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesOrdersServiceMultipleItemsSingleton`](PurchasesOrdersServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceMultipleItemsSingleton`](PurchasesOrdersServiceMultipleItemsSingleton.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:1419](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1419)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesOrdersServiceMultipleItemsSingleton`](PurchasesOrdersServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceMultipleItemsSingleton`](PurchasesOrdersServiceMultipleItemsSingleton.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:1423](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1423)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesOrdersServiceMultipleItemsSingleton`](PurchasesOrdersServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceMultipleItemsSingleton`](PurchasesOrdersServiceMultipleItemsSingleton.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:1427](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1427)
