[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SupplyOffersServiceItemCreateRequest

# Class: SupplyOffersServiceItemCreateRequest

Describes the parameters required to add an item to a supply offer

**`Generated`**

from message Scailo.SupplyOffersServiceItemCreateRequest

## Hierarchy

- `Message`\<[`SupplyOffersServiceItemCreateRequest`](SupplyOffersServiceItemCreateRequest.md)\>

  ↳ **`SupplyOffersServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](SupplyOffersServiceItemCreateRequest.md#constructor)

### Properties

- [deliveryDate](SupplyOffersServiceItemCreateRequest.md#deliverydate)
- [discount](SupplyOffersServiceItemCreateRequest.md#discount)
- [familyId](SupplyOffersServiceItemCreateRequest.md#familyid)
- [internalQuantity](SupplyOffersServiceItemCreateRequest.md#internalquantity)
- [specifications](SupplyOffersServiceItemCreateRequest.md#specifications)
- [supplyOfferId](SupplyOffersServiceItemCreateRequest.md#supplyofferid)
- [taxGroupId](SupplyOffersServiceItemCreateRequest.md#taxgroupid)
- [userComment](SupplyOffersServiceItemCreateRequest.md#usercomment)
- [vendorQuantity](SupplyOffersServiceItemCreateRequest.md#vendorquantity)
- [vendorUnitPrice](SupplyOffersServiceItemCreateRequest.md#vendorunitprice)
- [vendorUomId](SupplyOffersServiceItemCreateRequest.md#vendoruomid)
- [fields](SupplyOffersServiceItemCreateRequest.md#fields)
- [runtime](SupplyOffersServiceItemCreateRequest.md#runtime)
- [typeName](SupplyOffersServiceItemCreateRequest.md#typename)

### Methods

- [clone](SupplyOffersServiceItemCreateRequest.md#clone)
- [equals](SupplyOffersServiceItemCreateRequest.md#equals)
- [fromBinary](SupplyOffersServiceItemCreateRequest.md#frombinary)
- [fromJson](SupplyOffersServiceItemCreateRequest.md#fromjson)
- [fromJsonString](SupplyOffersServiceItemCreateRequest.md#fromjsonstring)
- [getType](SupplyOffersServiceItemCreateRequest.md#gettype)
- [toBinary](SupplyOffersServiceItemCreateRequest.md#tobinary)
- [toJSON](SupplyOffersServiceItemCreateRequest.md#tojson)
- [toJson](SupplyOffersServiceItemCreateRequest.md#tojson-1)
- [toJsonString](SupplyOffersServiceItemCreateRequest.md#tojsonstring)
- [equals](SupplyOffersServiceItemCreateRequest.md#equals-1)
- [fromBinary](SupplyOffersServiceItemCreateRequest.md#frombinary-1)
- [fromJson](SupplyOffersServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](SupplyOffersServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SupplyOffersServiceItemCreateRequest**(`data?`): [`SupplyOffersServiceItemCreateRequest`](SupplyOffersServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SupplyOffersServiceItemCreateRequest`](SupplyOffersServiceItemCreateRequest.md)\> |

#### Returns

[`SupplyOffersServiceItemCreateRequest`](SupplyOffersServiceItemCreateRequest.md)

#### Overrides

Message\&lt;SupplyOffersServiceItemCreateRequest\&gt;.constructor

#### Defined in

[src/supply_offers.scailo_pb.ts:1042](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1042)

## Properties

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 18;

#### Defined in

[src/supply_offers.scailo_pb.ts:1033](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1033)

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

The applicable discount percentage (in cents)

**`Generated`**

from field: uint64 discount = 17;

#### Defined in

[src/supply_offers.scailo_pb.ts:1026](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1026)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/supply_offers.scailo_pb.ts:984](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L984)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being ordered in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/supply_offers.scailo_pb.ts:991](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L991)

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 19;

#### Defined in

[src/supply_offers.scailo_pb.ts:1040](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1040)

___

### supplyOfferId

• **supplyOfferId**: `bigint` = `protoInt64.zero`

Stores the supply offer ID

**`Generated`**

from field: uint64 supply_offer_id = 10;

#### Defined in

[src/supply_offers.scailo_pb.ts:977](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L977)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 16;

#### Defined in

[src/supply_offers.scailo_pb.ts:1019](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1019)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/supply_offers.scailo_pb.ts:970](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L970)

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being ordered in vendor's unit of material

**`Generated`**

from field: uint64 vendor_quantity = 14;

#### Defined in

[src/supply_offers.scailo_pb.ts:1005](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1005)

___

### vendorUnitPrice

• **vendorUnitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied by the vendor)

**`Generated`**

from field: uint64 vendor_unit_price = 15;

#### Defined in

[src/supply_offers.scailo_pb.ts:1012](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1012)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 13;

#### Defined in

[src/supply_offers.scailo_pb.ts:998](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L998)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/supply_offers.scailo_pb.ts:1049](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1049)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/supply_offers.scailo_pb.ts:1047](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1047)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SupplyOffersServiceItemCreateRequest"``

#### Defined in

[src/supply_offers.scailo_pb.ts:1048](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1048)

## Methods

### clone

▸ **clone**(): [`SupplyOffersServiceItemCreateRequest`](SupplyOffersServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`SupplyOffersServiceItemCreateRequest`](SupplyOffersServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SupplyOffersServiceItemCreateRequest`](SupplyOffersServiceItemCreateRequest.md) \| `PlainMessage`\<[`SupplyOffersServiceItemCreateRequest`](SupplyOffersServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SupplyOffersServiceItemCreateRequest`](SupplyOffersServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SupplyOffersServiceItemCreateRequest`](SupplyOffersServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`SupplyOffersServiceItemCreateRequest`](SupplyOffersServiceItemCreateRequest.md) \| `PlainMessage`\<[`SupplyOffersServiceItemCreateRequest`](SupplyOffersServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`SupplyOffersServiceItemCreateRequest`](SupplyOffersServiceItemCreateRequest.md) \| `PlainMessage`\<[`SupplyOffersServiceItemCreateRequest`](SupplyOffersServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/supply_offers.scailo_pb.ts:1075](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1075)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SupplyOffersServiceItemCreateRequest`](SupplyOffersServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SupplyOffersServiceItemCreateRequest`](SupplyOffersServiceItemCreateRequest.md)

#### Defined in

[src/supply_offers.scailo_pb.ts:1063](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1063)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SupplyOffersServiceItemCreateRequest`](SupplyOffersServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOffersServiceItemCreateRequest`](SupplyOffersServiceItemCreateRequest.md)

#### Defined in

[src/supply_offers.scailo_pb.ts:1067](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1067)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SupplyOffersServiceItemCreateRequest`](SupplyOffersServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOffersServiceItemCreateRequest`](SupplyOffersServiceItemCreateRequest.md)

#### Defined in

[src/supply_offers.scailo_pb.ts:1071](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1071)
