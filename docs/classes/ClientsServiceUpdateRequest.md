[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientsServiceUpdateRequest

# Class: ClientsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.ClientsServiceUpdateRequest

## Hierarchy

- `Message`\<[`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)\>

  ↳ **`ClientsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ClientsServiceUpdateRequest.md#constructor)

### Properties

- [code](ClientsServiceUpdateRequest.md#code)
- [email](ClientsServiceUpdateRequest.md#email)
- [formData](ClientsServiceUpdateRequest.md#formdata)
- [id](ClientsServiceUpdateRequest.md#id)
- [name](ClientsServiceUpdateRequest.md#name)
- [notifyUsers](ClientsServiceUpdateRequest.md#notifyusers)
- [phone](ClientsServiceUpdateRequest.md#phone)
- [userComment](ClientsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](ClientsServiceUpdateRequest.md#vaultfolderid)
- [fields](ClientsServiceUpdateRequest.md#fields)
- [runtime](ClientsServiceUpdateRequest.md#runtime)
- [typeName](ClientsServiceUpdateRequest.md#typename)

### Methods

- [clone](ClientsServiceUpdateRequest.md#clone)
- [equals](ClientsServiceUpdateRequest.md#equals)
- [fromBinary](ClientsServiceUpdateRequest.md#frombinary)
- [fromJson](ClientsServiceUpdateRequest.md#fromjson)
- [fromJsonString](ClientsServiceUpdateRequest.md#fromjsonstring)
- [getType](ClientsServiceUpdateRequest.md#gettype)
- [toBinary](ClientsServiceUpdateRequest.md#tobinary)
- [toJSON](ClientsServiceUpdateRequest.md#tojson)
- [toJson](ClientsServiceUpdateRequest.md#tojson-1)
- [toJsonString](ClientsServiceUpdateRequest.md#tojsonstring)
- [equals](ClientsServiceUpdateRequest.md#equals-1)
- [fromBinary](ClientsServiceUpdateRequest.md#frombinary-1)
- [fromJson](ClientsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](ClientsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientsServiceUpdateRequest**(`data?`): [`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)\> |

#### Returns

[`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)

#### Overrides

Message\&lt;ClientsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/clients.scailo_pb.ts:337](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L337)

## Properties

### code

• **code**: `string` = `""`

The unique code by which the client is classified

**`Generated`**

from field: string code = 11;

#### Defined in

[src/clients.scailo_pb.ts:314](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L314)

___

### email

• **email**: `string` = `""`

The primary email of the client

**`Generated`**

from field: string email = 12;

#### Defined in

[src/clients.scailo_pb.ts:321](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L321)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/clients.scailo_pb.ts:335](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L335)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/clients.scailo_pb.ts:272](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L272)

___

### name

• **name**: `string` = `""`

The name of the client

**`Generated`**

from field: string name = 10;

#### Defined in

[src/clients.scailo_pb.ts:307](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L307)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/clients.scailo_pb.ts:284](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L284)

___

### phone

• **phone**: `string` = `""`

The primary contact number of the client

**`Generated`**

from field: string phone = 13;

#### Defined in

[src/clients.scailo_pb.ts:328](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L328)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/clients.scailo_pb.ts:265](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L265)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Updated vault folder ID for documentation storage.

**`Example`**

```ts
15235
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/clients.scailo_pb.ts:300](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L300)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/clients.scailo_pb.ts:344](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L344)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/clients.scailo_pb.ts:342](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L342)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientsServiceUpdateRequest"``

#### Defined in

[src/clients.scailo_pb.ts:343](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L343)

## Methods

### clone

▸ **clone**(): [`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md) \| `PlainMessage`\<[`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md) \| `PlainMessage`\<[`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md) \| `PlainMessage`\<[`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/clients.scailo_pb.ts:368](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L368)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)

#### Defined in

[src/clients.scailo_pb.ts:356](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L356)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)

#### Defined in

[src/clients.scailo_pb.ts:360](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L360)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)

#### Defined in

[src/clients.scailo_pb.ts:364](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L364)
