[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseOrderInventoryMatch

# Class: PurchaseOrderInventoryMatch

Describes the parameters that are part of a purchase order's inventory match

**`Generated`**

from message Scailo.PurchaseOrderInventoryMatch

## Hierarchy

- `Message`\<[`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)\>

  ↳ **`PurchaseOrderInventoryMatch`**

## Table of contents

### Constructors

- [constructor](PurchaseOrderInventoryMatch.md#constructor)

### Properties

- [debitedPrimary](PurchaseOrderInventoryMatch.md#debitedprimary)
- [debitedSecondary](PurchaseOrderInventoryMatch.md#debitedsecondary)
- [familyId](PurchaseOrderInventoryMatch.md#familyid)
- [invoicedPrimary](PurchaseOrderInventoryMatch.md#invoicedprimary)
- [invoicedSecondary](PurchaseOrderInventoryMatch.md#invoicedsecondary)
- [orderedPrimary](PurchaseOrderInventoryMatch.md#orderedprimary)
- [orderedSecondary](PurchaseOrderInventoryMatch.md#orderedsecondary)
- [receivedPrimary](PurchaseOrderInventoryMatch.md#receivedprimary)
- [receivedSecondary](PurchaseOrderInventoryMatch.md#receivedsecondary)
- [returnedPrimary](PurchaseOrderInventoryMatch.md#returnedprimary)
- [returnedSecondary](PurchaseOrderInventoryMatch.md#returnedsecondary)
- [vendorUomId](PurchaseOrderInventoryMatch.md#vendoruomid)
- [fields](PurchaseOrderInventoryMatch.md#fields)
- [runtime](PurchaseOrderInventoryMatch.md#runtime)
- [typeName](PurchaseOrderInventoryMatch.md#typename)

### Methods

- [clone](PurchaseOrderInventoryMatch.md#clone)
- [equals](PurchaseOrderInventoryMatch.md#equals)
- [fromBinary](PurchaseOrderInventoryMatch.md#frombinary)
- [fromJson](PurchaseOrderInventoryMatch.md#fromjson)
- [fromJsonString](PurchaseOrderInventoryMatch.md#fromjsonstring)
- [getType](PurchaseOrderInventoryMatch.md#gettype)
- [toBinary](PurchaseOrderInventoryMatch.md#tobinary)
- [toJSON](PurchaseOrderInventoryMatch.md#tojson)
- [toJson](PurchaseOrderInventoryMatch.md#tojson-1)
- [toJsonString](PurchaseOrderInventoryMatch.md#tojsonstring)
- [equals](PurchaseOrderInventoryMatch.md#equals-1)
- [fromBinary](PurchaseOrderInventoryMatch.md#frombinary-1)
- [fromJson](PurchaseOrderInventoryMatch.md#fromjson-1)
- [fromJsonString](PurchaseOrderInventoryMatch.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseOrderInventoryMatch**(`data?`): [`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)\> |

#### Returns

[`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)

#### Overrides

Message\&lt;PurchaseOrderInventoryMatch\&gt;.constructor

#### Defined in

src/purchases_orders.scailo_pb.ts:3378

## Properties

### debitedPrimary

• **debitedPrimary**: `bigint` = `protoInt64.zero`

Stores the debited quantity in primary unit of material

**`Generated`**

from field: uint64 debited_primary = 14;

#### Defined in

src/purchases_orders.scailo_pb.ts:3369

___

### debitedSecondary

• **debitedSecondary**: `bigint` = `protoInt64.zero`

Stores the debited quantity in secondary unit of material

**`Generated`**

from field: uint64 debited_secondary = 24;

#### Defined in

src/purchases_orders.scailo_pb.ts:3376

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 1;

#### Defined in

src/purchases_orders.scailo_pb.ts:3299

___

### invoicedPrimary

• **invoicedPrimary**: `bigint` = `protoInt64.zero`

Stores the invoiced quantity in primary unit of material

**`Generated`**

from field: uint64 invoiced_primary = 12;

#### Defined in

src/purchases_orders.scailo_pb.ts:3341

___

### invoicedSecondary

• **invoicedSecondary**: `bigint` = `protoInt64.zero`

Stores the invoiced quantity in secondary unit of material

**`Generated`**

from field: uint64 invoiced_secondary = 22;

#### Defined in

src/purchases_orders.scailo_pb.ts:3348

___

### orderedPrimary

• **orderedPrimary**: `bigint` = `protoInt64.zero`

Stores the ordered quantity in primary unit of material

**`Generated`**

from field: uint64 ordered_primary = 10;

#### Defined in

src/purchases_orders.scailo_pb.ts:3313

___

### orderedSecondary

• **orderedSecondary**: `bigint` = `protoInt64.zero`

Stores the ordered quantity in secondary unit of material

**`Generated`**

from field: uint64 ordered_secondary = 20;

#### Defined in

src/purchases_orders.scailo_pb.ts:3320

___

### receivedPrimary

• **receivedPrimary**: `bigint` = `protoInt64.zero`

Stores the received quantity in primary unit of material

**`Generated`**

from field: uint64 received_primary = 11;

#### Defined in

src/purchases_orders.scailo_pb.ts:3327

___

### receivedSecondary

• **receivedSecondary**: `bigint` = `protoInt64.zero`

Stores the received quantity in secondary unit of material

**`Generated`**

from field: uint64 received_secondary = 21;

#### Defined in

src/purchases_orders.scailo_pb.ts:3334

___

### returnedPrimary

• **returnedPrimary**: `bigint` = `protoInt64.zero`

Stores the returned quantity in primary unit of material

**`Generated`**

from field: uint64 returned_primary = 13;

#### Defined in

src/purchases_orders.scailo_pb.ts:3355

___

### returnedSecondary

• **returnedSecondary**: `bigint` = `protoInt64.zero`

Stores the returned quantity in secondary unit of material

**`Generated`**

from field: uint64 returned_secondary = 23;

#### Defined in

src/purchases_orders.scailo_pb.ts:3362

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the vendor unit of material ID

**`Generated`**

from field: uint64 vendor_uom_id = 2;

#### Defined in

src/purchases_orders.scailo_pb.ts:3306

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_orders.scailo_pb.ts:3385

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_orders.scailo_pb.ts:3383

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseOrderInventoryMatch"``

#### Defined in

src/purchases_orders.scailo_pb.ts:3384

## Methods

### clone

▸ **clone**(): [`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)

Create a deep copy.

#### Returns

[`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md) \| `PlainMessage`\<[`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)\>

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
| `a` | `undefined` \| [`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md) \| `PlainMessage`\<[`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)\> |
| `b` | `undefined` \| [`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md) \| `PlainMessage`\<[`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_orders.scailo_pb.ts:3412

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:3400

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:3404

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:3408
