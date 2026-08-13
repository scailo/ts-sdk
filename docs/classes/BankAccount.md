[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / BankAccount

# Class: BankAccount

Represents a full Bank Account within the system.

**`Generated`**

from message Scailo.BankAccount

## Hierarchy

- `Message`\<[`BankAccount`](BankAccount.md)\>

  ↳ **`BankAccount`**

## Table of contents

### Constructors

- [constructor](BankAccount.md#constructor)

### Properties

- [approvalMetadata](BankAccount.md#approvalmetadata)
- [code](BankAccount.md#code)
- [entityUuid](BankAccount.md#entityuuid)
- [formData](BankAccount.md#formdata)
- [logs](BankAccount.md#logs)
- [metadata](BankAccount.md#metadata)
- [name](BankAccount.md#name)
- [status](BankAccount.md#status)
- [fields](BankAccount.md#fields)
- [runtime](BankAccount.md#runtime)
- [typeName](BankAccount.md#typename)

### Methods

- [clone](BankAccount.md#clone)
- [equals](BankAccount.md#equals)
- [fromBinary](BankAccount.md#frombinary)
- [fromJson](BankAccount.md#fromjson)
- [fromJsonString](BankAccount.md#fromjsonstring)
- [getType](BankAccount.md#gettype)
- [toBinary](BankAccount.md#tobinary)
- [toJSON](BankAccount.md#tojson)
- [toJson](BankAccount.md#tojson-1)
- [toJsonString](BankAccount.md#tojsonstring)
- [equals](BankAccount.md#equals-1)
- [fromBinary](BankAccount.md#frombinary-1)
- [fromJson](BankAccount.md#fromjson-1)
- [fromJsonString](BankAccount.md#fromjsonstring-1)

## Constructors

### constructor

• **new BankAccount**(`data?`): [`BankAccount`](BankAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`BankAccount`](BankAccount.md)\> |

#### Returns

[`BankAccount`](BankAccount.md)

#### Overrides

Message\&lt;BankAccount\&gt;.constructor

#### Defined in

[src/bank_accounts.scailo_pb.ts:421](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L421)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/bank_accounts.scailo_pb.ts:375](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L375)

___

### code

• **code**: `string` = `""`

**`Description`**

The unique code or internal classification token by which the bank account is registered.

**`Example`**

```ts
"ACC-OPS-01"
```

**`Generated`**

from field: string code = 11;

#### Defined in

[src/bank_accounts.scailo_pb.ts:411](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L411)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/bank_accounts.scailo_pb.ts:359](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L359)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/bank_accounts.scailo_pb.ts:419](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L419)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/bank_accounts.scailo_pb.ts:391](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L391)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/bank_accounts.scailo_pb.ts:367](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L367)

___

### name

• **name**: `string` = `""`

**`Description`**

The official or friendly name of the corporate bank account.

**`Example`**

```ts
"Main Operational Account"
```

**`Generated`**

from field: string name = 10;

#### Defined in

[src/bank_accounts.scailo_pb.ts:401](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L401)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/bank_accounts.scailo_pb.ts:383](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L383)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/bank_accounts.scailo_pb.ts:428](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L428)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/bank_accounts.scailo_pb.ts:426](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L426)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.BankAccount"``

#### Defined in

[src/bank_accounts.scailo_pb.ts:427](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L427)

## Methods

### clone

▸ **clone**(): [`BankAccount`](BankAccount.md)

Create a deep copy.

#### Returns

[`BankAccount`](BankAccount.md)

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
| `other` | `undefined` \| ``null`` \| [`BankAccount`](BankAccount.md) \| `PlainMessage`\<[`BankAccount`](BankAccount.md)\> |

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

▸ **getType**(): `MessageType`\<[`BankAccount`](BankAccount.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`BankAccount`](BankAccount.md)\>

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
| `a` | `undefined` \| [`BankAccount`](BankAccount.md) \| `PlainMessage`\<[`BankAccount`](BankAccount.md)\> |
| `b` | `undefined` \| [`BankAccount`](BankAccount.md) \| `PlainMessage`\<[`BankAccount`](BankAccount.md)\> |

#### Returns

`boolean`

#### Defined in

[src/bank_accounts.scailo_pb.ts:451](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L451)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BankAccount`](BankAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`BankAccount`](BankAccount.md)

#### Defined in

[src/bank_accounts.scailo_pb.ts:439](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L439)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BankAccount`](BankAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`BankAccount`](BankAccount.md)

#### Defined in

[src/bank_accounts.scailo_pb.ts:443](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L443)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BankAccount`](BankAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`BankAccount`](BankAccount.md)

#### Defined in

[src/bank_accounts.scailo_pb.ts:447](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/bank_accounts.scailo_pb.ts#L447)
