[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SupplyOfferItemProspectiveInfoRequest

# Class: SupplyOfferItemProspectiveInfoRequest

Describes the parameters that are required to retrieve the info of a prospective supply offer item

**`Generated`**

from message Scailo.SupplyOfferItemProspectiveInfoRequest

## Hierarchy

- `Message`\<[`SupplyOfferItemProspectiveInfoRequest`](SupplyOfferItemProspectiveInfoRequest.md)\>

  ↳ **`SupplyOfferItemProspectiveInfoRequest`**

## Table of contents

### Constructors

- [constructor](SupplyOfferItemProspectiveInfoRequest.md#constructor)

### Properties

- [familyId](SupplyOfferItemProspectiveInfoRequest.md#familyid)
- [supplyOfferId](SupplyOfferItemProspectiveInfoRequest.md#supplyofferid)
- [vendorUomId](SupplyOfferItemProspectiveInfoRequest.md#vendoruomid)
- [fields](SupplyOfferItemProspectiveInfoRequest.md#fields)
- [runtime](SupplyOfferItemProspectiveInfoRequest.md#runtime)
- [typeName](SupplyOfferItemProspectiveInfoRequest.md#typename)

### Methods

- [clone](SupplyOfferItemProspectiveInfoRequest.md#clone)
- [equals](SupplyOfferItemProspectiveInfoRequest.md#equals)
- [fromBinary](SupplyOfferItemProspectiveInfoRequest.md#frombinary)
- [fromJson](SupplyOfferItemProspectiveInfoRequest.md#fromjson)
- [fromJsonString](SupplyOfferItemProspectiveInfoRequest.md#fromjsonstring)
- [getType](SupplyOfferItemProspectiveInfoRequest.md#gettype)
- [toBinary](SupplyOfferItemProspectiveInfoRequest.md#tobinary)
- [toJSON](SupplyOfferItemProspectiveInfoRequest.md#tojson)
- [toJson](SupplyOfferItemProspectiveInfoRequest.md#tojson-1)
- [toJsonString](SupplyOfferItemProspectiveInfoRequest.md#tojsonstring)
- [equals](SupplyOfferItemProspectiveInfoRequest.md#equals-1)
- [fromBinary](SupplyOfferItemProspectiveInfoRequest.md#frombinary-1)
- [fromJson](SupplyOfferItemProspectiveInfoRequest.md#fromjson-1)
- [fromJsonString](SupplyOfferItemProspectiveInfoRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SupplyOfferItemProspectiveInfoRequest**(`data?`): [`SupplyOfferItemProspectiveInfoRequest`](SupplyOfferItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SupplyOfferItemProspectiveInfoRequest`](SupplyOfferItemProspectiveInfoRequest.md)\> |

#### Returns

[`SupplyOfferItemProspectiveInfoRequest`](SupplyOfferItemProspectiveInfoRequest.md)

#### Overrides

Message\&lt;SupplyOfferItemProspectiveInfoRequest\&gt;.constructor

#### Defined in

[src/supply_offers.scailo_pb.ts:1537](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1537)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/supply_offers.scailo_pb.ts:1528](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1528)

___

### supplyOfferId

• **supplyOfferId**: `bigint` = `protoInt64.zero`

Stores the supply offer ID

**`Generated`**

from field: uint64 supply_offer_id = 10;

#### Defined in

[src/supply_offers.scailo_pb.ts:1521](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1521)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material (if 0, the value is ignored while retrieving records)

**`Generated`**

from field: uint64 vendor_uom_id = 13;

#### Defined in

[src/supply_offers.scailo_pb.ts:1535](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1535)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/supply_offers.scailo_pb.ts:1544](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1544)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/supply_offers.scailo_pb.ts:1542](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1542)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SupplyOfferItemProspectiveInfoRequest"``

#### Defined in

[src/supply_offers.scailo_pb.ts:1543](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1543)

## Methods

### clone

▸ **clone**(): [`SupplyOfferItemProspectiveInfoRequest`](SupplyOfferItemProspectiveInfoRequest.md)

Create a deep copy.

#### Returns

[`SupplyOfferItemProspectiveInfoRequest`](SupplyOfferItemProspectiveInfoRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SupplyOfferItemProspectiveInfoRequest`](SupplyOfferItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`SupplyOfferItemProspectiveInfoRequest`](SupplyOfferItemProspectiveInfoRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SupplyOfferItemProspectiveInfoRequest`](SupplyOfferItemProspectiveInfoRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SupplyOfferItemProspectiveInfoRequest`](SupplyOfferItemProspectiveInfoRequest.md)\>

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
| `a` | `undefined` \| [`SupplyOfferItemProspectiveInfoRequest`](SupplyOfferItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`SupplyOfferItemProspectiveInfoRequest`](SupplyOfferItemProspectiveInfoRequest.md)\> |
| `b` | `undefined` \| [`SupplyOfferItemProspectiveInfoRequest`](SupplyOfferItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`SupplyOfferItemProspectiveInfoRequest`](SupplyOfferItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/supply_offers.scailo_pb.ts:1562](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1562)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SupplyOfferItemProspectiveInfoRequest`](SupplyOfferItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SupplyOfferItemProspectiveInfoRequest`](SupplyOfferItemProspectiveInfoRequest.md)

#### Defined in

[src/supply_offers.scailo_pb.ts:1550](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1550)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SupplyOfferItemProspectiveInfoRequest`](SupplyOfferItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOfferItemProspectiveInfoRequest`](SupplyOfferItemProspectiveInfoRequest.md)

#### Defined in

[src/supply_offers.scailo_pb.ts:1554](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1554)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SupplyOfferItemProspectiveInfoRequest`](SupplyOfferItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOfferItemProspectiveInfoRequest`](SupplyOfferItemProspectiveInfoRequest.md)

#### Defined in

[src/supply_offers.scailo_pb.ts:1558](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L1558)
