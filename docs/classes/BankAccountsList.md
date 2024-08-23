[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / BankAccountsList

# Class: BankAccountsList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.BankAccountsList

## Hierarchy

- `Message`\<[`BankAccountsList`](BankAccountsList.md)\>

  ↳ **`BankAccountsList`**

## Table of contents

### Constructors

- [constructor](BankAccountsList.md#constructor)

### Properties

- [list](BankAccountsList.md#list)
- [fields](BankAccountsList.md#fields)
- [runtime](BankAccountsList.md#runtime)
- [typeName](BankAccountsList.md#typename)

### Methods

- [clone](BankAccountsList.md#clone)
- [equals](BankAccountsList.md#equals)
- [fromBinary](BankAccountsList.md#frombinary)
- [fromJson](BankAccountsList.md#fromjson)
- [fromJsonString](BankAccountsList.md#fromjsonstring)
- [getType](BankAccountsList.md#gettype)
- [toBinary](BankAccountsList.md#tobinary)
- [toJSON](BankAccountsList.md#tojson)
- [toJson](BankAccountsList.md#tojson-1)
- [toJsonString](BankAccountsList.md#tojsonstring)
- [equals](BankAccountsList.md#equals-1)
- [fromBinary](BankAccountsList.md#frombinary-1)
- [fromJson](BankAccountsList.md#fromjson-1)
- [fromJsonString](BankAccountsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new BankAccountsList**(`data?`): [`BankAccountsList`](BankAccountsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`BankAccountsList`](BankAccountsList.md)\> |

#### Returns

[`BankAccountsList`](BankAccountsList.md)

#### Overrides

Message\&lt;BankAccountsList\&gt;.constructor

#### Defined in

src/bank_accounts.scailo_pb.ts:354

## Properties

### list

• **list**: [`BankAccount`](BankAccount.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.BankAccount list = 1;

#### Defined in

src/bank_accounts.scailo_pb.ts:352

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/bank_accounts.scailo_pb.ts:361

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/bank_accounts.scailo_pb.ts:359

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.BankAccountsList"``

#### Defined in

src/bank_accounts.scailo_pb.ts:360

## Methods

### clone

▸ **clone**(): [`BankAccountsList`](BankAccountsList.md)

Create a deep copy.

#### Returns

[`BankAccountsList`](BankAccountsList.md)

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
| `other` | `undefined` \| ``null`` \| [`BankAccountsList`](BankAccountsList.md) \| `PlainMessage`\<[`BankAccountsList`](BankAccountsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`BankAccountsList`](BankAccountsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`BankAccountsList`](BankAccountsList.md)\>

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
| `a` | `undefined` \| [`BankAccountsList`](BankAccountsList.md) \| `PlainMessage`\<[`BankAccountsList`](BankAccountsList.md)\> |
| `b` | `undefined` \| [`BankAccountsList`](BankAccountsList.md) \| `PlainMessage`\<[`BankAccountsList`](BankAccountsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/bank_accounts.scailo_pb.ts:377

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BankAccountsList`](BankAccountsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`BankAccountsList`](BankAccountsList.md)

#### Defined in

src/bank_accounts.scailo_pb.ts:365

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BankAccountsList`](BankAccountsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`BankAccountsList`](BankAccountsList.md)

#### Defined in

src/bank_accounts.scailo_pb.ts:369

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BankAccountsList`](BankAccountsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`BankAccountsList`](BankAccountsList.md)

#### Defined in

src/bank_accounts.scailo_pb.ts:373
