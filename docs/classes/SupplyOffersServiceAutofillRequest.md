[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SupplyOffersServiceAutofillRequest

# Class: SupplyOffersServiceAutofillRequest

Describes the parameters necessary to perform an autofill request

**`Generated`**

from message Scailo.SupplyOffersServiceAutofillRequest

## Hierarchy

- `Message`\<[`SupplyOffersServiceAutofillRequest`](SupplyOffersServiceAutofillRequest.md)\>

  ↳ **`SupplyOffersServiceAutofillRequest`**

## Table of contents

### Constructors

- [constructor](SupplyOffersServiceAutofillRequest.md#constructor)

### Properties

- [userComment](SupplyOffersServiceAutofillRequest.md#usercomment)
- [uuid](SupplyOffersServiceAutofillRequest.md#uuid)
- [fields](SupplyOffersServiceAutofillRequest.md#fields)
- [runtime](SupplyOffersServiceAutofillRequest.md#runtime)
- [typeName](SupplyOffersServiceAutofillRequest.md#typename)

### Methods

- [clone](SupplyOffersServiceAutofillRequest.md#clone)
- [equals](SupplyOffersServiceAutofillRequest.md#equals)
- [fromBinary](SupplyOffersServiceAutofillRequest.md#frombinary)
- [fromJson](SupplyOffersServiceAutofillRequest.md#fromjson)
- [fromJsonString](SupplyOffersServiceAutofillRequest.md#fromjsonstring)
- [getType](SupplyOffersServiceAutofillRequest.md#gettype)
- [toBinary](SupplyOffersServiceAutofillRequest.md#tobinary)
- [toJSON](SupplyOffersServiceAutofillRequest.md#tojson)
- [toJson](SupplyOffersServiceAutofillRequest.md#tojson-1)
- [toJsonString](SupplyOffersServiceAutofillRequest.md#tojsonstring)
- [equals](SupplyOffersServiceAutofillRequest.md#equals-1)
- [fromBinary](SupplyOffersServiceAutofillRequest.md#frombinary-1)
- [fromJson](SupplyOffersServiceAutofillRequest.md#fromjson-1)
- [fromJsonString](SupplyOffersServiceAutofillRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SupplyOffersServiceAutofillRequest**(`data?`): [`SupplyOffersServiceAutofillRequest`](SupplyOffersServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SupplyOffersServiceAutofillRequest`](SupplyOffersServiceAutofillRequest.md)\> |

#### Returns

[`SupplyOffersServiceAutofillRequest`](SupplyOffersServiceAutofillRequest.md)

#### Overrides

Message\&lt;SupplyOffersServiceAutofillRequest\&gt;.constructor

#### Defined in

[src/supply_offers.scailo_pb.ts:645](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L645)

## Properties

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/supply_offers.scailo_pb.ts:636](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L636)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the record that needs to be updated

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/supply_offers.scailo_pb.ts:643](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L643)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/supply_offers.scailo_pb.ts:652](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L652)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/supply_offers.scailo_pb.ts:650](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L650)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SupplyOffersServiceAutofillRequest"``

#### Defined in

[src/supply_offers.scailo_pb.ts:651](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L651)

## Methods

### clone

▸ **clone**(): [`SupplyOffersServiceAutofillRequest`](SupplyOffersServiceAutofillRequest.md)

Create a deep copy.

#### Returns

[`SupplyOffersServiceAutofillRequest`](SupplyOffersServiceAutofillRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SupplyOffersServiceAutofillRequest`](SupplyOffersServiceAutofillRequest.md) \| `PlainMessage`\<[`SupplyOffersServiceAutofillRequest`](SupplyOffersServiceAutofillRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SupplyOffersServiceAutofillRequest`](SupplyOffersServiceAutofillRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SupplyOffersServiceAutofillRequest`](SupplyOffersServiceAutofillRequest.md)\>

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
| `a` | `undefined` \| [`SupplyOffersServiceAutofillRequest`](SupplyOffersServiceAutofillRequest.md) \| `PlainMessage`\<[`SupplyOffersServiceAutofillRequest`](SupplyOffersServiceAutofillRequest.md)\> |
| `b` | `undefined` \| [`SupplyOffersServiceAutofillRequest`](SupplyOffersServiceAutofillRequest.md) \| `PlainMessage`\<[`SupplyOffersServiceAutofillRequest`](SupplyOffersServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/supply_offers.scailo_pb.ts:669](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L669)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SupplyOffersServiceAutofillRequest`](SupplyOffersServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SupplyOffersServiceAutofillRequest`](SupplyOffersServiceAutofillRequest.md)

#### Defined in

[src/supply_offers.scailo_pb.ts:657](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L657)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SupplyOffersServiceAutofillRequest`](SupplyOffersServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOffersServiceAutofillRequest`](SupplyOffersServiceAutofillRequest.md)

#### Defined in

[src/supply_offers.scailo_pb.ts:661](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L661)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SupplyOffersServiceAutofillRequest`](SupplyOffersServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOffersServiceAutofillRequest`](SupplyOffersServiceAutofillRequest.md)

#### Defined in

[src/supply_offers.scailo_pb.ts:665](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L665)
