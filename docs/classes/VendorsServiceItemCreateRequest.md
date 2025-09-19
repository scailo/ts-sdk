[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorsServiceItemCreateRequest

# Class: VendorsServiceItemCreateRequest

Describes the parameters required to add an item to a vendor

**`Generated`**

from message Scailo.VendorsServiceItemCreateRequest

## Hierarchy

- `Message`\<[`VendorsServiceItemCreateRequest`](VendorsServiceItemCreateRequest.md)\>

  ↳ **`VendorsServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](VendorsServiceItemCreateRequest.md#constructor)

### Properties

- [familyId](VendorsServiceItemCreateRequest.md#familyid)
- [maxOrderQty](VendorsServiceItemCreateRequest.md#maxorderqty)
- [minOrderQty](VendorsServiceItemCreateRequest.md#minorderqty)
- [price](VendorsServiceItemCreateRequest.md#price)
- [priceDeviationRelLowerLimitType](VendorsServiceItemCreateRequest.md#pricedeviationrellowerlimittype)
- [priceDeviationRelLowerLimitValue](VendorsServiceItemCreateRequest.md#pricedeviationrellowerlimitvalue)
- [priceDeviationRelUpperLimitType](VendorsServiceItemCreateRequest.md#pricedeviationrelupperlimittype)
- [priceDeviationRelUpperLimitValue](VendorsServiceItemCreateRequest.md#pricedeviationrelupperlimitvalue)
- [stepInterval](VendorsServiceItemCreateRequest.md#stepinterval)
- [taxGroupId](VendorsServiceItemCreateRequest.md#taxgroupid)
- [uomId](VendorsServiceItemCreateRequest.md#uomid)
- [userComment](VendorsServiceItemCreateRequest.md#usercomment)
- [vendorFamilyCode](VendorsServiceItemCreateRequest.md#vendorfamilycode)
- [vendorId](VendorsServiceItemCreateRequest.md#vendorid)
- [fields](VendorsServiceItemCreateRequest.md#fields)
- [runtime](VendorsServiceItemCreateRequest.md#runtime)
- [typeName](VendorsServiceItemCreateRequest.md#typename)

### Methods

- [clone](VendorsServiceItemCreateRequest.md#clone)
- [equals](VendorsServiceItemCreateRequest.md#equals)
- [fromBinary](VendorsServiceItemCreateRequest.md#frombinary)
- [fromJson](VendorsServiceItemCreateRequest.md#fromjson)
- [fromJsonString](VendorsServiceItemCreateRequest.md#fromjsonstring)
- [getType](VendorsServiceItemCreateRequest.md#gettype)
- [toBinary](VendorsServiceItemCreateRequest.md#tobinary)
- [toJSON](VendorsServiceItemCreateRequest.md#tojson)
- [toJson](VendorsServiceItemCreateRequest.md#tojson-1)
- [toJsonString](VendorsServiceItemCreateRequest.md#tojsonstring)
- [equals](VendorsServiceItemCreateRequest.md#equals-1)
- [fromBinary](VendorsServiceItemCreateRequest.md#frombinary-1)
- [fromJson](VendorsServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](VendorsServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorsServiceItemCreateRequest**(`data?`): [`VendorsServiceItemCreateRequest`](VendorsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorsServiceItemCreateRequest`](VendorsServiceItemCreateRequest.md)\> |

#### Returns

[`VendorsServiceItemCreateRequest`](VendorsServiceItemCreateRequest.md)

#### Overrides

Message\&lt;VendorsServiceItemCreateRequest\&gt;.constructor

#### Defined in

[src/vendors.scailo_pb.ts:761](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L761)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/vendors.scailo_pb.ts:682](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L682)

___

### maxOrderQty

• **maxOrderQty**: `bigint` = `protoInt64.zero`

The maximum order quantity that can be placed (in cents) (0 represents unlimited max quantity)

**`Generated`**

from field: uint64 max_order_qty = 21;

#### Defined in

[src/vendors.scailo_pb.ts:752](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L752)

___

### minOrderQty

• **minOrderQty**: `bigint` = `protoInt64.zero`

The minimum order quantity that needs to be placed (in cents) (0.01 is the minimum)

**`Generated`**

from field: uint64 min_order_qty = 20;

#### Defined in

[src/vendors.scailo_pb.ts:745](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L745)

___

### price

• **price**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied by the vendor)

**`Generated`**

from field: uint64 price = 15;

#### Defined in

[src/vendors.scailo_pb.ts:710](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L710)

___

### priceDeviationRelLowerLimitType

• **priceDeviationRelLowerLimitType**: [`VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE`](../enums/VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE.md) = `VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE.VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE_ANY_UNSPECIFIED`

The relative lower limit type on the price deviation of the item

**`Generated`**

from field: Scailo.VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE price_deviation_rel_lower_limit_type = 46;

#### Defined in

[src/vendors.scailo_pb.ts:717](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L717)

___

### priceDeviationRelLowerLimitValue

• **priceDeviationRelLowerLimitValue**: `bigint` = `protoInt64.zero`

The relative lower limit value on the price deviation of the item (in cents). For percentage, this is the percentage value; for absolute, this is the absolute value. If set to -1, the limit is ignored. The final lower limit of the item is computed as (price - price_deviation_rel_lower_limit_value)

**`Generated`**

from field: int64 price_deviation_rel_lower_limit_value = 47;

#### Defined in

[src/vendors.scailo_pb.ts:724](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L724)

___

### priceDeviationRelUpperLimitType

• **priceDeviationRelUpperLimitType**: [`VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE`](../enums/VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE.md) = `VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE.VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE_ANY_UNSPECIFIED`

The relative upper limit type on the price deviation of the item

**`Generated`**

from field: Scailo.VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE price_deviation_rel_upper_limit_type = 48;

#### Defined in

[src/vendors.scailo_pb.ts:731](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L731)

___

### priceDeviationRelUpperLimitValue

• **priceDeviationRelUpperLimitValue**: `bigint` = `protoInt64.zero`

The relative upper limit value on the price deviation of the item (in cents). For percentage, this is the percentage value; for absolute, this is the absolute value. If set to -1, the limit is ignored. The final upper limit of the item is computed as (price + price_deviation_rel_upper_limit_value)

**`Generated`**

from field: int64 price_deviation_rel_upper_limit_value = 49;

#### Defined in

[src/vendors.scailo_pb.ts:738](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L738)

___

### stepInterval

• **stepInterval**: `bigint` = `protoInt64.zero`

The incremental count by which the order quantity can be increased (in cents)

**`Generated`**

from field: uint64 step_interval = 22;

#### Defined in

[src/vendors.scailo_pb.ts:759](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L759)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 14;

#### Defined in

[src/vendors.scailo_pb.ts:703](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L703)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: uint64 uom_id = 13;

#### Defined in

[src/vendors.scailo_pb.ts:696](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L696)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/vendors.scailo_pb.ts:668](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L668)

___

### vendorFamilyCode

• **vendorFamilyCode**: `string` = `""`

Stores the optional family code as represented by the vendor

**`Generated`**

from field: string vendor_family_code = 12;

#### Defined in

[src/vendors.scailo_pb.ts:689](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L689)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

Stores the vendor ID

**`Generated`**

from field: uint64 vendor_id = 10;

#### Defined in

[src/vendors.scailo_pb.ts:675](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L675)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendors.scailo_pb.ts:768](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L768)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendors.scailo_pb.ts:766](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L766)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorsServiceItemCreateRequest"``

#### Defined in

[src/vendors.scailo_pb.ts:767](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L767)

## Methods

### clone

▸ **clone**(): [`VendorsServiceItemCreateRequest`](VendorsServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`VendorsServiceItemCreateRequest`](VendorsServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorsServiceItemCreateRequest`](VendorsServiceItemCreateRequest.md) \| `PlainMessage`\<[`VendorsServiceItemCreateRequest`](VendorsServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorsServiceItemCreateRequest`](VendorsServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorsServiceItemCreateRequest`](VendorsServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`VendorsServiceItemCreateRequest`](VendorsServiceItemCreateRequest.md) \| `PlainMessage`\<[`VendorsServiceItemCreateRequest`](VendorsServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`VendorsServiceItemCreateRequest`](VendorsServiceItemCreateRequest.md) \| `PlainMessage`\<[`VendorsServiceItemCreateRequest`](VendorsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendors.scailo_pb.ts:797](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L797)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorsServiceItemCreateRequest`](VendorsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorsServiceItemCreateRequest`](VendorsServiceItemCreateRequest.md)

#### Defined in

[src/vendors.scailo_pb.ts:785](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L785)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorsServiceItemCreateRequest`](VendorsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorsServiceItemCreateRequest`](VendorsServiceItemCreateRequest.md)

#### Defined in

[src/vendors.scailo_pb.ts:789](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L789)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorsServiceItemCreateRequest`](VendorsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorsServiceItemCreateRequest`](VendorsServiceItemCreateRequest.md)

#### Defined in

[src/vendors.scailo_pb.ts:793](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L793)
