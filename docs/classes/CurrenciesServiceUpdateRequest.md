[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CurrenciesServiceUpdateRequest

# Class: CurrenciesServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.CurrenciesServiceUpdateRequest

## Hierarchy

- `Message`\<[`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)\>

  ↳ **`CurrenciesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](CurrenciesServiceUpdateRequest.md#constructor)

### Properties

- [description](CurrenciesServiceUpdateRequest.md#description)
- [exponentName](CurrenciesServiceUpdateRequest.md#exponentname)
- [id](CurrenciesServiceUpdateRequest.md#id)
- [mantissaName](CurrenciesServiceUpdateRequest.md#mantissaname)
- [name](CurrenciesServiceUpdateRequest.md#name)
- [notifyUsers](CurrenciesServiceUpdateRequest.md#notifyusers)
- [symbol](CurrenciesServiceUpdateRequest.md#symbol)
- [userComment](CurrenciesServiceUpdateRequest.md#usercomment)
- [fields](CurrenciesServiceUpdateRequest.md#fields)
- [runtime](CurrenciesServiceUpdateRequest.md#runtime)
- [typeName](CurrenciesServiceUpdateRequest.md#typename)

### Methods

- [clone](CurrenciesServiceUpdateRequest.md#clone)
- [equals](CurrenciesServiceUpdateRequest.md#equals)
- [fromBinary](CurrenciesServiceUpdateRequest.md#frombinary)
- [fromJson](CurrenciesServiceUpdateRequest.md#fromjson)
- [fromJsonString](CurrenciesServiceUpdateRequest.md#fromjsonstring)
- [getType](CurrenciesServiceUpdateRequest.md#gettype)
- [toBinary](CurrenciesServiceUpdateRequest.md#tobinary)
- [toJSON](CurrenciesServiceUpdateRequest.md#tojson)
- [toJson](CurrenciesServiceUpdateRequest.md#tojson-1)
- [toJsonString](CurrenciesServiceUpdateRequest.md#tojsonstring)
- [equals](CurrenciesServiceUpdateRequest.md#equals-1)
- [fromBinary](CurrenciesServiceUpdateRequest.md#frombinary-1)
- [fromJson](CurrenciesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](CurrenciesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new CurrenciesServiceUpdateRequest**(`data?`): [`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)\> |

#### Returns

[`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)

#### Overrides

Message\&lt;CurrenciesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/currencies.scailo_pb.ts:238](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L238)

## Properties

### description

• **description**: `string` = `""`

The description of the currency

**`Generated`**

from field: string description = 14;

#### Defined in

[src/currencies.scailo_pb.ts:236](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L236)

___

### exponentName

• **exponentName**: `string` = `""`

The name of the exponent

**`Generated`**

from field: string exponent_name = 13;

#### Defined in

[src/currencies.scailo_pb.ts:229](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L229)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/currencies.scailo_pb.ts:194](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L194)

___

### mantissaName

• **mantissaName**: `string` = `""`

The name of the mantissa

**`Generated`**

from field: string mantissa_name = 12;

#### Defined in

[src/currencies.scailo_pb.ts:222](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L222)

___

### name

• **name**: `string` = `""`

The name of the currency

**`Generated`**

from field: string name = 10;

#### Defined in

[src/currencies.scailo_pb.ts:208](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L208)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that denotes if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/currencies.scailo_pb.ts:201](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L201)

___

### symbol

• **symbol**: `string` = `""`

The unique symbol by which the currency is classified

**`Generated`**

from field: string symbol = 11;

#### Defined in

[src/currencies.scailo_pb.ts:215](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L215)

___

### userComment

• **userComment**: `string` = `""`

Currencies any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/currencies.scailo_pb.ts:187](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L187)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/currencies.scailo_pb.ts:245](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L245)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/currencies.scailo_pb.ts:243](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L243)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CurrenciesServiceUpdateRequest"``

#### Defined in

[src/currencies.scailo_pb.ts:244](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L244)

## Methods

### clone

▸ **clone**(): [`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md) \| `PlainMessage`\<[`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md) \| `PlainMessage`\<[`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md) \| `PlainMessage`\<[`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/currencies.scailo_pb.ts:268](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L268)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)

#### Defined in

[src/currencies.scailo_pb.ts:256](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L256)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)

#### Defined in

[src/currencies.scailo_pb.ts:260](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L260)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)

#### Defined in

[src/currencies.scailo_pb.ts:264](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L264)
