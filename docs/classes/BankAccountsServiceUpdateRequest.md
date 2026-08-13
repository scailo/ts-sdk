[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / BankAccountsServiceUpdateRequest

# Class: BankAccountsServiceUpdateRequest

Request message for updating an existing BankAccount record.
Only applicable for records in `DRAFT` or `REVISION` states.
This message allows for modifying the name, code and other custom form fields
of an established BankAccount.

**Note:** Only fields provided in the request will typically be updated.
The unique system ID is required to locate the target record.

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

[src/bank_accounts.scailo_pb.ts:311](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/bank_accounts.scailo_pb.ts#L311)

## Properties

### code

• `Optional` **code**: `string`

**`Optional`**

**`Description`**

The unique code or internal classification token by which the bank account is registered.

**`Example`**

```ts
"ACC-OPS-01"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string code = 11;

#### Defined in

[src/bank_accounts.scailo_pb.ts:295](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/bank_accounts.scailo_pb.ts#L295)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

**`Optional`**

**`Description`**

A collection of dynamic form fields for organization-specific data.

**`Example`**

```ts
[]
```

**`Format`**

An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/bank_accounts.scailo_pb.ts:309](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/bank_accounts.scailo_pb.ts#L309)

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

[src/bank_accounts.scailo_pb.ts:251](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/bank_accounts.scailo_pb.ts#L251)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The official or friendly name of the corporate bank account.

**`Example`**

```ts
"Main Operational Account"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 10;

#### Defined in

[src/bank_accounts.scailo_pb.ts:279](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/bank_accounts.scailo_pb.ts#L279)

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

[src/bank_accounts.scailo_pb.ts:263](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/bank_accounts.scailo_pb.ts#L263)

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

[src/bank_accounts.scailo_pb.ts:235](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/bank_accounts.scailo_pb.ts#L235)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/bank_accounts.scailo_pb.ts:318](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/bank_accounts.scailo_pb.ts#L318)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/bank_accounts.scailo_pb.ts:316](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/bank_accounts.scailo_pb.ts#L316)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.BankAccountsServiceUpdateRequest"``

#### Defined in

[src/bank_accounts.scailo_pb.ts:317](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/bank_accounts.scailo_pb.ts#L317)

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

[src/bank_accounts.scailo_pb.ts:339](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/bank_accounts.scailo_pb.ts#L339)

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

[src/bank_accounts.scailo_pb.ts:327](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/bank_accounts.scailo_pb.ts#L327)

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

[src/bank_accounts.scailo_pb.ts:331](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/bank_accounts.scailo_pb.ts#L331)

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

[src/bank_accounts.scailo_pb.ts:335](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/bank_accounts.scailo_pb.ts#L335)
