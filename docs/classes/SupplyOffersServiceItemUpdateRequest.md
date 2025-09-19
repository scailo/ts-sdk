[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SupplyOffersServiceItemUpdateRequest

# Class: SupplyOffersServiceItemUpdateRequest

Describes the parameters required to update an item in a supply offer

**`Generated`**

from message Scailo.SupplyOffersServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`SupplyOffersServiceItemUpdateRequest`](SupplyOffersServiceItemUpdateRequest.md)\>

  ↳ **`SupplyOffersServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SupplyOffersServiceItemUpdateRequest.md#constructor)

### Properties

- [deliveryDate](SupplyOffersServiceItemUpdateRequest.md#deliverydate)
- [discount](SupplyOffersServiceItemUpdateRequest.md#discount)
- [id](SupplyOffersServiceItemUpdateRequest.md#id)
- [internalQuantity](SupplyOffersServiceItemUpdateRequest.md#internalquantity)
- [specifications](SupplyOffersServiceItemUpdateRequest.md#specifications)
- [taxGroupId](SupplyOffersServiceItemUpdateRequest.md#taxgroupid)
- [userComment](SupplyOffersServiceItemUpdateRequest.md#usercomment)
- [vendorQuantity](SupplyOffersServiceItemUpdateRequest.md#vendorquantity)
- [vendorUnitPrice](SupplyOffersServiceItemUpdateRequest.md#vendorunitprice)
- [vendorUomId](SupplyOffersServiceItemUpdateRequest.md#vendoruomid)
- [fields](SupplyOffersServiceItemUpdateRequest.md#fields)
- [runtime](SupplyOffersServiceItemUpdateRequest.md#runtime)
- [typeName](SupplyOffersServiceItemUpdateRequest.md#typename)

### Methods

- [clone](SupplyOffersServiceItemUpdateRequest.md#clone)
- [equals](SupplyOffersServiceItemUpdateRequest.md#equals)
- [fromBinary](SupplyOffersServiceItemUpdateRequest.md#frombinary)
- [fromJson](SupplyOffersServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](SupplyOffersServiceItemUpdateRequest.md#fromjsonstring)
- [getType](SupplyOffersServiceItemUpdateRequest.md#gettype)
- [toBinary](SupplyOffersServiceItemUpdateRequest.md#tobinary)
- [toJSON](SupplyOffersServiceItemUpdateRequest.md#tojson)
- [toJson](SupplyOffersServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](SupplyOffersServiceItemUpdateRequest.md#tojsonstring)
- [equals](SupplyOffersServiceItemUpdateRequest.md#equals-1)
- [fromBinary](SupplyOffersServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](SupplyOffersServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](SupplyOffersServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SupplyOffersServiceItemUpdateRequest**(`data?`): [`SupplyOffersServiceItemUpdateRequest`](SupplyOffersServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SupplyOffersServiceItemUpdateRequest`](SupplyOffersServiceItemUpdateRequest.md)\> |

#### Returns

[`SupplyOffersServiceItemUpdateRequest`](SupplyOffersServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;SupplyOffersServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/supply_offers.scailo_pb.ts:1157](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1157)

## Properties

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 18;

#### Defined in

[src/supply_offers.scailo_pb.ts:1148](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1148)

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

The applicable discount percentage (in cents)

**`Generated`**

from field: uint64 discount = 17;

#### Defined in

[src/supply_offers.scailo_pb.ts:1141](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1141)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/supply_offers.scailo_pb.ts:1099](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1099)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being ordered in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/supply_offers.scailo_pb.ts:1106](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1106)

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 19;

#### Defined in

[src/supply_offers.scailo_pb.ts:1155](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1155)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 16;

#### Defined in

[src/supply_offers.scailo_pb.ts:1134](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1134)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/supply_offers.scailo_pb.ts:1092](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1092)

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being ordered in vendor's unit of material

**`Generated`**

from field: uint64 vendor_quantity = 14;

#### Defined in

[src/supply_offers.scailo_pb.ts:1120](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1120)

___

### vendorUnitPrice

• **vendorUnitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied by the vendor)

**`Generated`**

from field: uint64 vendor_unit_price = 15;

#### Defined in

[src/supply_offers.scailo_pb.ts:1127](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1127)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 13;

#### Defined in

[src/supply_offers.scailo_pb.ts:1113](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1113)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/supply_offers.scailo_pb.ts:1164](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1164)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/supply_offers.scailo_pb.ts:1162](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1162)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SupplyOffersServiceItemUpdateRequest"``

#### Defined in

[src/supply_offers.scailo_pb.ts:1163](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1163)

## Methods

### clone

▸ **clone**(): [`SupplyOffersServiceItemUpdateRequest`](SupplyOffersServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`SupplyOffersServiceItemUpdateRequest`](SupplyOffersServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SupplyOffersServiceItemUpdateRequest`](SupplyOffersServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SupplyOffersServiceItemUpdateRequest`](SupplyOffersServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SupplyOffersServiceItemUpdateRequest`](SupplyOffersServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SupplyOffersServiceItemUpdateRequest`](SupplyOffersServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SupplyOffersServiceItemUpdateRequest`](SupplyOffersServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SupplyOffersServiceItemUpdateRequest`](SupplyOffersServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`SupplyOffersServiceItemUpdateRequest`](SupplyOffersServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SupplyOffersServiceItemUpdateRequest`](SupplyOffersServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/supply_offers.scailo_pb.ts:1189](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1189)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SupplyOffersServiceItemUpdateRequest`](SupplyOffersServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SupplyOffersServiceItemUpdateRequest`](SupplyOffersServiceItemUpdateRequest.md)

#### Defined in

[src/supply_offers.scailo_pb.ts:1177](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1177)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SupplyOffersServiceItemUpdateRequest`](SupplyOffersServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOffersServiceItemUpdateRequest`](SupplyOffersServiceItemUpdateRequest.md)

#### Defined in

[src/supply_offers.scailo_pb.ts:1181](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1181)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SupplyOffersServiceItemUpdateRequest`](SupplyOffersServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOffersServiceItemUpdateRequest`](SupplyOffersServiceItemUpdateRequest.md)

#### Defined in

[src/supply_offers.scailo_pb.ts:1185](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1185)
