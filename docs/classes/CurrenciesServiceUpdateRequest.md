[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CurrenciesServiceUpdateRequest

# Class: CurrenciesServiceUpdateRequest

Request message for updating an existing Currency record.
Only applicable for records in `DRAFT` or `REVISION` states.
This message allows for modifying the name, symbol, mantissa name, exponent name, and description
of an established Currency.

**Note:** Only fields provided in the request will typically be updated.
The unique system ID is required to locate the target record.

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

[src/currencies.scailo_pb.ts:380](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L380)

## Properties

### description

• `Optional` **description**: `string`

**`Optional`**

**`Description`**

Contextual description or clarifying details outlining the specific use-case or regional scope of this currency record.

**`Example`**

```ts
"United States legal tender used for domestic operational accounts."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string description = 14;

#### Defined in

[src/currencies.scailo_pb.ts:378](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L378)

___

### exponentName

• `Optional` **exponentName**: `string`

**`Optional`**

**`Description`**

The technical term or label for the currency's fractional sub-unit (often mapping conceptually to the minor unit/exponent).

**`Example`**

```ts
"Cent"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string exponent_name = 13;

#### Defined in

[src/currencies.scailo_pb.ts:362](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L362)

___

### id

• **id**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target record that needs to be updated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/currencies.scailo_pb.ts:286](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L286)

___

### mantissaName

• `Optional` **mantissaName**: `string`

**`Optional`**

**`Description`**

The technical term or label for the currency's major or primary unit (often mapping conceptually to the whole integer part/mantissa).

**`Example`**

```ts
"Dollar"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string mantissa_name = 12;

#### Defined in

[src/currencies.scailo_pb.ts:346](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L346)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The official or canonical name of the currency.

**`Example`**

```ts
"US Dollar"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 10;

#### Defined in

[src/currencies.scailo_pb.ts:314](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L314)

___

### notifyUsers

• `Optional` **notifyUsers**: `boolean`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: optional bool notify_users = 3;

#### Defined in

[src/currencies.scailo_pb.ts:298](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L298)

___

### symbol

• `Optional` **symbol**: `string`

**`Optional`**

**`Description`**

The unique symbol, shorthand token, or ISO code by which the currency is structurally classified.

**`Example`**

```ts
"USD"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string symbol = 11;

#### Defined in

[src/currencies.scailo_pb.ts:330](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L330)

___

### userComment

• `Optional` **userComment**: `string`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string user_comment = 1;

#### Defined in

[src/currencies.scailo_pb.ts:270](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L270)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/currencies.scailo_pb.ts:387](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L387)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/currencies.scailo_pb.ts:385](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L385)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CurrenciesServiceUpdateRequest"``

#### Defined in

[src/currencies.scailo_pb.ts:386](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L386)

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

[src/currencies.scailo_pb.ts:410](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L410)

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

[src/currencies.scailo_pb.ts:398](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L398)

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

[src/currencies.scailo_pb.ts:402](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L402)

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

[src/currencies.scailo_pb.ts:406](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L406)
