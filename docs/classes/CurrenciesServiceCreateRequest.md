[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / CurrenciesServiceCreateRequest

# Class: CurrenciesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.CurrenciesServiceCreateRequest

## Hierarchy

- `Message`\<[`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)\>

  ↳ **`CurrenciesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](CurrenciesServiceCreateRequest.md#constructor)

### Properties

- [description](CurrenciesServiceCreateRequest.md#description)
- [entityUuid](CurrenciesServiceCreateRequest.md#entityuuid)
- [exponentName](CurrenciesServiceCreateRequest.md#exponentname)
- [mantissaName](CurrenciesServiceCreateRequest.md#mantissaname)
- [name](CurrenciesServiceCreateRequest.md#name)
- [symbol](CurrenciesServiceCreateRequest.md#symbol)
- [userComment](CurrenciesServiceCreateRequest.md#usercomment)
- [fields](CurrenciesServiceCreateRequest.md#fields)
- [runtime](CurrenciesServiceCreateRequest.md#runtime)
- [typeName](CurrenciesServiceCreateRequest.md#typename)

### Methods

- [clone](CurrenciesServiceCreateRequest.md#clone)
- [equals](CurrenciesServiceCreateRequest.md#equals)
- [fromBinary](CurrenciesServiceCreateRequest.md#frombinary)
- [fromJson](CurrenciesServiceCreateRequest.md#fromjson)
- [fromJsonString](CurrenciesServiceCreateRequest.md#fromjsonstring)
- [getType](CurrenciesServiceCreateRequest.md#gettype)
- [toBinary](CurrenciesServiceCreateRequest.md#tobinary)
- [toJSON](CurrenciesServiceCreateRequest.md#tojson)
- [toJson](CurrenciesServiceCreateRequest.md#tojson-1)
- [toJsonString](CurrenciesServiceCreateRequest.md#tojsonstring)
- [equals](CurrenciesServiceCreateRequest.md#equals-1)
- [fromBinary](CurrenciesServiceCreateRequest.md#frombinary-1)
- [fromJson](CurrenciesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](CurrenciesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new CurrenciesServiceCreateRequest**(`data?`): [`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)\> |

#### Returns

[`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)

#### Overrides

Message\&lt;CurrenciesServiceCreateRequest\&gt;.constructor

#### Defined in

src/currencies.scailo_pb.ts:141

## Properties

### description

• **description**: `string` = `""`

The description of the currency

**`Generated`**

from field: string description = 14;

#### Defined in

src/currencies.scailo_pb.ts:139

___

### entityUuid

• **entityUuid**: `string` = `""`

Currencies a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/currencies.scailo_pb.ts:97

___

### exponentName

• **exponentName**: `string` = `""`

The name of the exponent

**`Generated`**

from field: string exponent_name = 13;

#### Defined in

src/currencies.scailo_pb.ts:132

___

### mantissaName

• **mantissaName**: `string` = `""`

The name of the mantissa

**`Generated`**

from field: string mantissa_name = 12;

#### Defined in

src/currencies.scailo_pb.ts:125

___

### name

• **name**: `string` = `""`

The name of the currency

**`Generated`**

from field: string name = 10;

#### Defined in

src/currencies.scailo_pb.ts:111

___

### symbol

• **symbol**: `string` = `""`

The unique symbol by which the currency is classified

**`Generated`**

from field: string symbol = 11;

#### Defined in

src/currencies.scailo_pb.ts:118

___

### userComment

• **userComment**: `string` = `""`

Currencies any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/currencies.scailo_pb.ts:104

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/currencies.scailo_pb.ts:148

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/currencies.scailo_pb.ts:146

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CurrenciesServiceCreateRequest"``

#### Defined in

src/currencies.scailo_pb.ts:147

## Methods

### clone

▸ **clone**(): [`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md) \| `PlainMessage`\<[`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md) \| `PlainMessage`\<[`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md) \| `PlainMessage`\<[`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/currencies.scailo_pb.ts:170

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)

#### Defined in

src/currencies.scailo_pb.ts:158

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)

#### Defined in

src/currencies.scailo_pb.ts:162

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)

#### Defined in

src/currencies.scailo_pb.ts:166
