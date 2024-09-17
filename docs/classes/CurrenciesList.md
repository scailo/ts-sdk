[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CurrenciesList

# Class: CurrenciesList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.CurrenciesList

## Hierarchy

- `Message`\<[`CurrenciesList`](CurrenciesList.md)\>

  ↳ **`CurrenciesList`**

## Table of contents

### Constructors

- [constructor](CurrenciesList.md#constructor)

### Properties

- [list](CurrenciesList.md#list)
- [fields](CurrenciesList.md#fields)
- [runtime](CurrenciesList.md#runtime)
- [typeName](CurrenciesList.md#typename)

### Methods

- [clone](CurrenciesList.md#clone)
- [equals](CurrenciesList.md#equals)
- [fromBinary](CurrenciesList.md#frombinary)
- [fromJson](CurrenciesList.md#fromjson)
- [fromJsonString](CurrenciesList.md#fromjsonstring)
- [getType](CurrenciesList.md#gettype)
- [toBinary](CurrenciesList.md#tobinary)
- [toJSON](CurrenciesList.md#tojson)
- [toJson](CurrenciesList.md#tojson-1)
- [toJsonString](CurrenciesList.md#tojsonstring)
- [equals](CurrenciesList.md#equals-1)
- [fromBinary](CurrenciesList.md#frombinary-1)
- [fromJson](CurrenciesList.md#fromjson-1)
- [fromJsonString](CurrenciesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new CurrenciesList**(`data?`): [`CurrenciesList`](CurrenciesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CurrenciesList`](CurrenciesList.md)\> |

#### Returns

[`CurrenciesList`](CurrenciesList.md)

#### Overrides

Message\&lt;CurrenciesList\&gt;.constructor

#### Defined in

src/currencies.scailo_pb.ts:401

## Properties

### list

• **list**: [`Currency`](Currency.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.Currency list = 1;

#### Defined in

src/currencies.scailo_pb.ts:399

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/currencies.scailo_pb.ts:408

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/currencies.scailo_pb.ts:406

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CurrenciesList"``

#### Defined in

src/currencies.scailo_pb.ts:407

## Methods

### clone

▸ **clone**(): [`CurrenciesList`](CurrenciesList.md)

Create a deep copy.

#### Returns

[`CurrenciesList`](CurrenciesList.md)

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
| `other` | `undefined` \| ``null`` \| [`CurrenciesList`](CurrenciesList.md) \| `PlainMessage`\<[`CurrenciesList`](CurrenciesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`CurrenciesList`](CurrenciesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CurrenciesList`](CurrenciesList.md)\>

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
| `a` | `undefined` \| [`CurrenciesList`](CurrenciesList.md) \| `PlainMessage`\<[`CurrenciesList`](CurrenciesList.md)\> |
| `b` | `undefined` \| [`CurrenciesList`](CurrenciesList.md) \| `PlainMessage`\<[`CurrenciesList`](CurrenciesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/currencies.scailo_pb.ts:424

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CurrenciesList`](CurrenciesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CurrenciesList`](CurrenciesList.md)

#### Defined in

src/currencies.scailo_pb.ts:412

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CurrenciesList`](CurrenciesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CurrenciesList`](CurrenciesList.md)

#### Defined in

src/currencies.scailo_pb.ts:416

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CurrenciesList`](CurrenciesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CurrenciesList`](CurrenciesList.md)

#### Defined in

src/currencies.scailo_pb.ts:420
