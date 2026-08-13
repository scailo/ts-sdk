[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CurrenciesServiceCreateRequest

# Class: CurrenciesServiceCreateRequest

Request message for creating and registering a new Currency definition.
This record tracks international or internal currency metadata, localized
sub-unit names (mantissa/exponent), symbols, and tenant isolation parameters.

**Note:** This is the primary entry point for Treasury, Finance, and Admins
to initialize legal tender configurations or internal credit structures used for financial ledgering.

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

[src/currencies.scailo_pb.ts:209](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L209)

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

[src/currencies.scailo_pb.ts:207](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L207)

___

### entityUuid

• `Optional` **entityUuid**: `string`

**`Optional`**

**`Description`**

The globally unique identifier for the Organization or Business Entity.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: optional string entity_uuid = 1;

#### Defined in

[src/currencies.scailo_pb.ts:111](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L111)

___

### exponentName

• **exponentName**: `string` = `""`

**`Mandatory`**

**`Description`**

The technical term or label for the currency's fractional sub-unit (often mapping conceptually to the minor unit/exponent).

**`Example`**

```ts
"Cent"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string exponent_name = 13;

#### Defined in

[src/currencies.scailo_pb.ts:191](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L191)

___

### mantissaName

• **mantissaName**: `string` = `""`

**`Mandatory`**

**`Description`**

The technical term or label for the currency's major or primary unit (often mapping conceptually to the whole integer part/mantissa).

**`Example`**

```ts
"Dollar"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string mantissa_name = 12;

#### Defined in

[src/currencies.scailo_pb.ts:175](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L175)

___

### name

• **name**: `string` = `""`

**`Mandatory`**

**`Description`**

The official or canonical name of the currency.

**`Example`**

```ts
"US Dollar"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string name = 10;

#### Defined in

[src/currencies.scailo_pb.ts:143](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L143)

___

### symbol

• **symbol**: `string` = `""`

**`Mandatory`**

**`Description`**

The unique symbol, shorthand token, or ISO code by which the currency is structurally classified.

**`Example`**

```ts
"USD"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string symbol = 11;

#### Defined in

[src/currencies.scailo_pb.ts:159](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L159)

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

from field: optional string user_comment = 2;

#### Defined in

[src/currencies.scailo_pb.ts:127](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L127)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/currencies.scailo_pb.ts:216](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L216)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/currencies.scailo_pb.ts:214](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L214)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CurrenciesServiceCreateRequest"``

#### Defined in

[src/currencies.scailo_pb.ts:215](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L215)

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

[src/currencies.scailo_pb.ts:238](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L238)

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

[src/currencies.scailo_pb.ts:226](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L226)

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

[src/currencies.scailo_pb.ts:230](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L230)

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

[src/currencies.scailo_pb.ts:234](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L234)
