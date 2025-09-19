[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / BankAccountsServiceUpdateRequest

# Class: BankAccountsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.BankAccountsServiceUpdateRequest

## Hierarchy

- `Message`\<[`BankAccountsServiceUpdateRequest`](BankAccountsServiceUpdateRequest.md)\>

  ↳ **`BankAccountsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](BankAccountsServiceUpdateRequest.md#constructor)

### Properties

- [code](BankAccountsServiceUpdateRequest.md#code)
- [formData](BankAccountsServiceUpdateRequest.md#formdata)
- [id](BankAccountsServiceUpdateRequest.md#id)
- [name](BankAccountsServiceUpdateRequest.md#name)
- [notifyUsers](BankAccountsServiceUpdateRequest.md#notifyusers)
- [userComment](BankAccountsServiceUpdateRequest.md#usercomment)
- [fields](BankAccountsServiceUpdateRequest.md#fields)
- [runtime](BankAccountsServiceUpdateRequest.md#runtime)
- [typeName](BankAccountsServiceUpdateRequest.md#typename)

### Methods

- [clone](BankAccountsServiceUpdateRequest.md#clone)
- [equals](BankAccountsServiceUpdateRequest.md#equals)
- [fromBinary](BankAccountsServiceUpdateRequest.md#frombinary)
- [fromJson](BankAccountsServiceUpdateRequest.md#fromjson)
- [fromJsonString](BankAccountsServiceUpdateRequest.md#fromjsonstring)
- [getType](BankAccountsServiceUpdateRequest.md#gettype)
- [toBinary](BankAccountsServiceUpdateRequest.md#tobinary)
- [toJSON](BankAccountsServiceUpdateRequest.md#tojson)
- [toJson](BankAccountsServiceUpdateRequest.md#tojson-1)
- [toJsonString](BankAccountsServiceUpdateRequest.md#tojsonstring)
- [equals](BankAccountsServiceUpdateRequest.md#equals-1)
- [fromBinary](BankAccountsServiceUpdateRequest.md#frombinary-1)
- [fromJson](BankAccountsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](BankAccountsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new BankAccountsServiceUpdateRequest**(`data?`): [`BankAccountsServiceUpdateRequest`](BankAccountsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`BankAccountsServiceUpdateRequest`](BankAccountsServiceUpdateRequest.md)\> |

#### Returns

[`BankAccountsServiceUpdateRequest`](BankAccountsServiceUpdateRequest.md)

#### Overrides

Message\&lt;BankAccountsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/bank_accounts.scailo_pb.ts:209](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L209)

## Properties

### code

• **code**: `string` = `""`

The unique code by which the bank account is classified

**`Generated`**

from field: string code = 11;

#### Defined in

[src/bank_accounts.scailo_pb.ts:200](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L200)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/bank_accounts.scailo_pb.ts:207](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L207)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/bank_accounts.scailo_pb.ts:179](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L179)

___

### name

• **name**: `string` = `""`

The name of the bank account

**`Generated`**

from field: string name = 10;

#### Defined in

[src/bank_accounts.scailo_pb.ts:193](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L193)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/bank_accounts.scailo_pb.ts:186](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L186)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/bank_accounts.scailo_pb.ts:172](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L172)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/bank_accounts.scailo_pb.ts:216](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L216)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/bank_accounts.scailo_pb.ts:214](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L214)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.BankAccountsServiceUpdateRequest"``

#### Defined in

[src/bank_accounts.scailo_pb.ts:215](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L215)

## Methods

### clone

▸ **clone**(): [`BankAccountsServiceUpdateRequest`](BankAccountsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`BankAccountsServiceUpdateRequest`](BankAccountsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`BankAccountsServiceUpdateRequest`](BankAccountsServiceUpdateRequest.md) \| `PlainMessage`\<[`BankAccountsServiceUpdateRequest`](BankAccountsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`BankAccountsServiceUpdateRequest`](BankAccountsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`BankAccountsServiceUpdateRequest`](BankAccountsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`BankAccountsServiceUpdateRequest`](BankAccountsServiceUpdateRequest.md) \| `PlainMessage`\<[`BankAccountsServiceUpdateRequest`](BankAccountsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`BankAccountsServiceUpdateRequest`](BankAccountsServiceUpdateRequest.md) \| `PlainMessage`\<[`BankAccountsServiceUpdateRequest`](BankAccountsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/bank_accounts.scailo_pb.ts:237](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L237)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BankAccountsServiceUpdateRequest`](BankAccountsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`BankAccountsServiceUpdateRequest`](BankAccountsServiceUpdateRequest.md)

#### Defined in

[src/bank_accounts.scailo_pb.ts:225](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L225)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BankAccountsServiceUpdateRequest`](BankAccountsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`BankAccountsServiceUpdateRequest`](BankAccountsServiceUpdateRequest.md)

#### Defined in

[src/bank_accounts.scailo_pb.ts:229](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L229)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BankAccountsServiceUpdateRequest`](BankAccountsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`BankAccountsServiceUpdateRequest`](BankAccountsServiceUpdateRequest.md)

#### Defined in

[src/bank_accounts.scailo_pb.ts:233](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L233)
