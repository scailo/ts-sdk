[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / BankAccountsServiceCreateRequest

# Class: BankAccountsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.BankAccountsServiceCreateRequest

## Hierarchy

- `Message`\<[`BankAccountsServiceCreateRequest`](BankAccountsServiceCreateRequest.md)\>

  ↳ **`BankAccountsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](BankAccountsServiceCreateRequest.md#constructor)

### Properties

- [code](BankAccountsServiceCreateRequest.md#code)
- [entityUuid](BankAccountsServiceCreateRequest.md#entityuuid)
- [formData](BankAccountsServiceCreateRequest.md#formdata)
- [name](BankAccountsServiceCreateRequest.md#name)
- [userComment](BankAccountsServiceCreateRequest.md#usercomment)
- [fields](BankAccountsServiceCreateRequest.md#fields)
- [runtime](BankAccountsServiceCreateRequest.md#runtime)
- [typeName](BankAccountsServiceCreateRequest.md#typename)

### Methods

- [clone](BankAccountsServiceCreateRequest.md#clone)
- [equals](BankAccountsServiceCreateRequest.md#equals)
- [fromBinary](BankAccountsServiceCreateRequest.md#frombinary)
- [fromJson](BankAccountsServiceCreateRequest.md#fromjson)
- [fromJsonString](BankAccountsServiceCreateRequest.md#fromjsonstring)
- [getType](BankAccountsServiceCreateRequest.md#gettype)
- [toBinary](BankAccountsServiceCreateRequest.md#tobinary)
- [toJSON](BankAccountsServiceCreateRequest.md#tojson)
- [toJson](BankAccountsServiceCreateRequest.md#tojson-1)
- [toJsonString](BankAccountsServiceCreateRequest.md#tojsonstring)
- [equals](BankAccountsServiceCreateRequest.md#equals-1)
- [fromBinary](BankAccountsServiceCreateRequest.md#frombinary-1)
- [fromJson](BankAccountsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](BankAccountsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new BankAccountsServiceCreateRequest**(`data?`): [`BankAccountsServiceCreateRequest`](BankAccountsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`BankAccountsServiceCreateRequest`](BankAccountsServiceCreateRequest.md)\> |

#### Returns

[`BankAccountsServiceCreateRequest`](BankAccountsServiceCreateRequest.md)

#### Overrides

Message\&lt;BankAccountsServiceCreateRequest\&gt;.constructor

#### Defined in

src/bank_accounts.scailo_pb.ts:128

## Properties

### code

• **code**: `string` = `""`

The unique code by which the bank account is classified

**`Generated`**

from field: string code = 11;

#### Defined in

src/bank_accounts.scailo_pb.ts:119

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/bank_accounts.scailo_pb.ts:98

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/bank_accounts.scailo_pb.ts:126

___

### name

• **name**: `string` = `""`

The name of the bank account

**`Generated`**

from field: string name = 10;

#### Defined in

src/bank_accounts.scailo_pb.ts:112

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/bank_accounts.scailo_pb.ts:105

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/bank_accounts.scailo_pb.ts:135

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/bank_accounts.scailo_pb.ts:133

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.BankAccountsServiceCreateRequest"``

#### Defined in

src/bank_accounts.scailo_pb.ts:134

## Methods

### clone

▸ **clone**(): [`BankAccountsServiceCreateRequest`](BankAccountsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`BankAccountsServiceCreateRequest`](BankAccountsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`BankAccountsServiceCreateRequest`](BankAccountsServiceCreateRequest.md) \| `PlainMessage`\<[`BankAccountsServiceCreateRequest`](BankAccountsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`BankAccountsServiceCreateRequest`](BankAccountsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`BankAccountsServiceCreateRequest`](BankAccountsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`BankAccountsServiceCreateRequest`](BankAccountsServiceCreateRequest.md) \| `PlainMessage`\<[`BankAccountsServiceCreateRequest`](BankAccountsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`BankAccountsServiceCreateRequest`](BankAccountsServiceCreateRequest.md) \| `PlainMessage`\<[`BankAccountsServiceCreateRequest`](BankAccountsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/bank_accounts.scailo_pb.ts:155

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BankAccountsServiceCreateRequest`](BankAccountsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`BankAccountsServiceCreateRequest`](BankAccountsServiceCreateRequest.md)

#### Defined in

src/bank_accounts.scailo_pb.ts:143

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BankAccountsServiceCreateRequest`](BankAccountsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`BankAccountsServiceCreateRequest`](BankAccountsServiceCreateRequest.md)

#### Defined in

src/bank_accounts.scailo_pb.ts:147

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BankAccountsServiceCreateRequest`](BankAccountsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`BankAccountsServiceCreateRequest`](BankAccountsServiceCreateRequest.md)

#### Defined in

src/bank_accounts.scailo_pb.ts:151
