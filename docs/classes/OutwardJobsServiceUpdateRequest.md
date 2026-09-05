[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsServiceUpdateRequest

# Class: OutwardJobsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.OutwardJobsServiceUpdateRequest

## Hierarchy

- `Message`\<[`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)\>

  ↳ **`OutwardJobsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobsServiceUpdateRequest.md#constructor)

### Properties

- [formData](OutwardJobsServiceUpdateRequest.md#formdata)
- [id](OutwardJobsServiceUpdateRequest.md#id)
- [notifyUsers](OutwardJobsServiceUpdateRequest.md#notifyusers)
- [projectId](OutwardJobsServiceUpdateRequest.md#projectid)
- [referenceId](OutwardJobsServiceUpdateRequest.md#referenceid)
- [userComment](OutwardJobsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](OutwardJobsServiceUpdateRequest.md#vaultfolderid)
- [fields](OutwardJobsServiceUpdateRequest.md#fields)
- [runtime](OutwardJobsServiceUpdateRequest.md#runtime)
- [typeName](OutwardJobsServiceUpdateRequest.md#typename)

### Methods

- [clone](OutwardJobsServiceUpdateRequest.md#clone)
- [equals](OutwardJobsServiceUpdateRequest.md#equals)
- [fromBinary](OutwardJobsServiceUpdateRequest.md#frombinary)
- [fromJson](OutwardJobsServiceUpdateRequest.md#fromjson)
- [fromJsonString](OutwardJobsServiceUpdateRequest.md#fromjsonstring)
- [getType](OutwardJobsServiceUpdateRequest.md#gettype)
- [toBinary](OutwardJobsServiceUpdateRequest.md#tobinary)
- [toJSON](OutwardJobsServiceUpdateRequest.md#tojson)
- [toJson](OutwardJobsServiceUpdateRequest.md#tojson-1)
- [toJsonString](OutwardJobsServiceUpdateRequest.md#tojsonstring)
- [equals](OutwardJobsServiceUpdateRequest.md#equals-1)
- [fromBinary](OutwardJobsServiceUpdateRequest.md#frombinary-1)
- [fromJson](OutwardJobsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](OutwardJobsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsServiceUpdateRequest**(`data?`): [`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)\> |

#### Returns

[`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)

#### Overrides

Message\&lt;OutwardJobsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/outward_jobs.scailo_pb.ts:591](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs.scailo_pb.ts#L591)

## Properties

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

[src/outward_jobs.scailo_pb.ts:589](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs.scailo_pb.ts#L589)

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

[src/outward_jobs.scailo_pb.ts:524](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs.scailo_pb.ts#L524)

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

[src/outward_jobs.scailo_pb.ts:536](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs.scailo_pb.ts#L536)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The optional associated ID of the project

**`Generated`**

from field: uint64 project_id = 16;

#### Defined in

[src/outward_jobs.scailo_pb.ts:575](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs.scailo_pb.ts#L575)

___

### referenceId

• **referenceId**: `string` = `""`

**`Mandatory`**

**`Description`**

Updated alphanumeric reference ID. Must contain at least 1 character.

**`Example`**

```ts
"ABS-2023-001-REV"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/outward_jobs.scailo_pb.ts:568](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs.scailo_pb.ts#L568)

___

### userComment

• **userComment**: `string` = `""`

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

from field: string user_comment = 1;

#### Defined in

[src/outward_jobs.scailo_pb.ts:508](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs.scailo_pb.ts#L508)

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

[src/outward_jobs.scailo_pb.ts:552](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs.scailo_pb.ts#L552)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/outward_jobs.scailo_pb.ts:598](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs.scailo_pb.ts#L598)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/outward_jobs.scailo_pb.ts:596](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs.scailo_pb.ts#L596)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsServiceUpdateRequest"``

#### Defined in

[src/outward_jobs.scailo_pb.ts:597](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs.scailo_pb.ts#L597)

## Methods

### clone

▸ **clone**(): [`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/outward_jobs.scailo_pb.ts:620](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs.scailo_pb.ts#L620)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:608](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs.scailo_pb.ts#L608)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:612](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs.scailo_pb.ts#L612)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:616](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs.scailo_pb.ts#L616)
