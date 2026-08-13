[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / BankAccountsServiceCreateRequest

# Class: BankAccountsServiceCreateRequest

Request message for creating a new bank account record.
This record tracks corporate banking details, identifiers, and custom form
data tied to specific target business entities for financial tracking.

**Note:** This is the primary entry point for Finance teams, Treasury, and Admins
to provision corporate bank accounts into the system for compliance and auditing.

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

[src/bank_accounts.scailo_pb.ts:176](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L176)

## Properties

### code

• **code**: `string` = `""`

**`Mandatory`**

**`Description`**

The unique code or internal classification token by which the bank account is registered.

**`Example`**

```ts
"ACC-OPS-01"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string code = 11;

#### Defined in

[src/bank_accounts.scailo_pb.ts:160](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L160)

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

[src/bank_accounts.scailo_pb.ts:112](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L112)

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

[src/bank_accounts.scailo_pb.ts:174](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L174)

___

### name

• **name**: `string` = `""`

**`Mandatory`**

**`Description`**

The official or friendly name of the corporate bank account.

**`Example`**

```ts
"Main Operational Account"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string name = 10;

#### Defined in

[src/bank_accounts.scailo_pb.ts:144](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L144)

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

[src/bank_accounts.scailo_pb.ts:128](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L128)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/bank_accounts.scailo_pb.ts:183](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L183)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/bank_accounts.scailo_pb.ts:181](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L181)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.BankAccountsServiceCreateRequest"``

#### Defined in

[src/bank_accounts.scailo_pb.ts:182](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L182)

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

[src/bank_accounts.scailo_pb.ts:203](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L203)

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

[src/bank_accounts.scailo_pb.ts:191](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L191)

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

[src/bank_accounts.scailo_pb.ts:195](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L195)

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

[src/bank_accounts.scailo_pb.ts:199](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L199)
