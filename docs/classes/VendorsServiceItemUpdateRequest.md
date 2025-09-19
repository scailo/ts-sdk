[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorsServiceItemUpdateRequest

# Class: VendorsServiceItemUpdateRequest

Describes the parameters required to update an item in a vendor

**`Generated`**

from message Scailo.VendorsServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`VendorsServiceItemUpdateRequest`](VendorsServiceItemUpdateRequest.md)\>

  ↳ **`VendorsServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](VendorsServiceItemUpdateRequest.md#constructor)

### Properties

- [id](VendorsServiceItemUpdateRequest.md#id)
- [maxOrderQty](VendorsServiceItemUpdateRequest.md#maxorderqty)
- [minOrderQty](VendorsServiceItemUpdateRequest.md#minorderqty)
- [price](VendorsServiceItemUpdateRequest.md#price)
- [priceDeviationRelLowerLimitType](VendorsServiceItemUpdateRequest.md#pricedeviationrellowerlimittype)
- [priceDeviationRelLowerLimitValue](VendorsServiceItemUpdateRequest.md#pricedeviationrellowerlimitvalue)
- [priceDeviationRelUpperLimitType](VendorsServiceItemUpdateRequest.md#pricedeviationrelupperlimittype)
- [priceDeviationRelUpperLimitValue](VendorsServiceItemUpdateRequest.md#pricedeviationrelupperlimitvalue)
- [stepInterval](VendorsServiceItemUpdateRequest.md#stepinterval)
- [taxGroupId](VendorsServiceItemUpdateRequest.md#taxgroupid)
- [uomId](VendorsServiceItemUpdateRequest.md#uomid)
- [userComment](VendorsServiceItemUpdateRequest.md#usercomment)
- [vendorFamilyCode](VendorsServiceItemUpdateRequest.md#vendorfamilycode)
- [fields](VendorsServiceItemUpdateRequest.md#fields)
- [runtime](VendorsServiceItemUpdateRequest.md#runtime)
- [typeName](VendorsServiceItemUpdateRequest.md#typename)

### Methods

- [clone](VendorsServiceItemUpdateRequest.md#clone)
- [equals](VendorsServiceItemUpdateRequest.md#equals)
- [fromBinary](VendorsServiceItemUpdateRequest.md#frombinary)
- [fromJson](VendorsServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](VendorsServiceItemUpdateRequest.md#fromjsonstring)
- [getType](VendorsServiceItemUpdateRequest.md#gettype)
- [toBinary](VendorsServiceItemUpdateRequest.md#tobinary)
- [toJSON](VendorsServiceItemUpdateRequest.md#tojson)
- [toJson](VendorsServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](VendorsServiceItemUpdateRequest.md#tojsonstring)
- [equals](VendorsServiceItemUpdateRequest.md#equals-1)
- [fromBinary](VendorsServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](VendorsServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](VendorsServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorsServiceItemUpdateRequest**(`data?`): [`VendorsServiceItemUpdateRequest`](VendorsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorsServiceItemUpdateRequest`](VendorsServiceItemUpdateRequest.md)\> |

#### Returns

[`VendorsServiceItemUpdateRequest`](VendorsServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;VendorsServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/vendors.scailo_pb.ts:900](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L900)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/vendors.scailo_pb.ts:821](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L821)

___

### maxOrderQty

• **maxOrderQty**: `bigint` = `protoInt64.zero`

The maximum order quantity that can be placed (in cents) (0 represents unlimited max quantity)

**`Generated`**

from field: uint64 max_order_qty = 21;

#### Defined in

[src/vendors.scailo_pb.ts:891](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L891)

___

### minOrderQty

• **minOrderQty**: `bigint` = `protoInt64.zero`

The minimum order quantity that needs to be placed (in cents) (0.01 is the minimum)

**`Generated`**

from field: uint64 min_order_qty = 20;

#### Defined in

[src/vendors.scailo_pb.ts:884](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L884)

___

### price

• **price**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied by the vendor)

**`Generated`**

from field: uint64 price = 15;

#### Defined in

[src/vendors.scailo_pb.ts:849](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L849)

___

### priceDeviationRelLowerLimitType

• **priceDeviationRelLowerLimitType**: [`VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE`](../enums/VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE.md) = `VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE.VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE_ANY_UNSPECIFIED`

The relative lower limit type on the price deviation of the item

**`Generated`**

from field: Scailo.VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE price_deviation_rel_lower_limit_type = 46;

#### Defined in

[src/vendors.scailo_pb.ts:856](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L856)

___

### priceDeviationRelLowerLimitValue

• **priceDeviationRelLowerLimitValue**: `bigint` = `protoInt64.zero`

The relative lower limit value on the price deviation of the item (in cents). For percentage, this is the percentage value; for absolute, this is the absolute value. If set to -1, the limit is ignored. The final lower limit of the item is computed as (price - price_deviation_rel_lower_limit_value)

**`Generated`**

from field: int64 price_deviation_rel_lower_limit_value = 47;

#### Defined in

[src/vendors.scailo_pb.ts:863](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L863)

___

### priceDeviationRelUpperLimitType

• **priceDeviationRelUpperLimitType**: [`VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE`](../enums/VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE.md) = `VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE.VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE_ANY_UNSPECIFIED`

The relative upper limit type on the price deviation of the item

**`Generated`**

from field: Scailo.VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE price_deviation_rel_upper_limit_type = 48;

#### Defined in

[src/vendors.scailo_pb.ts:870](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L870)

___

### priceDeviationRelUpperLimitValue

• **priceDeviationRelUpperLimitValue**: `bigint` = `protoInt64.zero`

The relative upper limit value on the price deviation of the item (in cents). For percentage, this is the percentage value; for absolute, this is the absolute value. If set to -1, the limit is ignored. The final upper limit of the item is computed as (price + price_deviation_rel_upper_limit_value)

**`Generated`**

from field: int64 price_deviation_rel_upper_limit_value = 49;

#### Defined in

[src/vendors.scailo_pb.ts:877](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L877)

___

### stepInterval

• **stepInterval**: `bigint` = `protoInt64.zero`

The incremental count by which the order quantity can be increased (in cents)

**`Generated`**

from field: uint64 step_interval = 22;

#### Defined in

[src/vendors.scailo_pb.ts:898](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L898)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 14;

#### Defined in

[src/vendors.scailo_pb.ts:842](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L842)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: uint64 uom_id = 13;

#### Defined in

[src/vendors.scailo_pb.ts:835](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L835)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/vendors.scailo_pb.ts:814](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L814)

___

### vendorFamilyCode

• **vendorFamilyCode**: `string` = `""`

Stores the optional family code as represented by the vendor

**`Generated`**

from field: string vendor_family_code = 12;

#### Defined in

[src/vendors.scailo_pb.ts:828](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L828)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendors.scailo_pb.ts:907](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L907)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendors.scailo_pb.ts:905](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L905)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorsServiceItemUpdateRequest"``

#### Defined in

[src/vendors.scailo_pb.ts:906](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L906)

## Methods

### clone

▸ **clone**(): [`VendorsServiceItemUpdateRequest`](VendorsServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`VendorsServiceItemUpdateRequest`](VendorsServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorsServiceItemUpdateRequest`](VendorsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`VendorsServiceItemUpdateRequest`](VendorsServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorsServiceItemUpdateRequest`](VendorsServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorsServiceItemUpdateRequest`](VendorsServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`VendorsServiceItemUpdateRequest`](VendorsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`VendorsServiceItemUpdateRequest`](VendorsServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`VendorsServiceItemUpdateRequest`](VendorsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`VendorsServiceItemUpdateRequest`](VendorsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendors.scailo_pb.ts:935](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L935)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorsServiceItemUpdateRequest`](VendorsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorsServiceItemUpdateRequest`](VendorsServiceItemUpdateRequest.md)

#### Defined in

[src/vendors.scailo_pb.ts:923](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L923)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorsServiceItemUpdateRequest`](VendorsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorsServiceItemUpdateRequest`](VendorsServiceItemUpdateRequest.md)

#### Defined in

[src/vendors.scailo_pb.ts:927](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L927)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorsServiceItemUpdateRequest`](VendorsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorsServiceItemUpdateRequest`](VendorsServiceItemUpdateRequest.md)

#### Defined in

[src/vendors.scailo_pb.ts:931](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L931)
