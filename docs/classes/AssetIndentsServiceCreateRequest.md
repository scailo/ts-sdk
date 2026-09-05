[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AssetIndentsServiceCreateRequest

# Class: AssetIndentsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.AssetIndentsServiceCreateRequest

## Hierarchy

- `Message`\<[`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)\>

  ↳ **`AssetIndentsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](AssetIndentsServiceCreateRequest.md#constructor)

### Properties

- [entityUuid](AssetIndentsServiceCreateRequest.md#entityuuid)
- [formData](AssetIndentsServiceCreateRequest.md#formdata)
- [locationId](AssetIndentsServiceCreateRequest.md#locationid)
- [projectId](AssetIndentsServiceCreateRequest.md#projectid)
- [referenceId](AssetIndentsServiceCreateRequest.md#referenceid)
- [userComment](AssetIndentsServiceCreateRequest.md#usercomment)
- [userId](AssetIndentsServiceCreateRequest.md#userid)
- [vaultFolderId](AssetIndentsServiceCreateRequest.md#vaultfolderid)
- [fields](AssetIndentsServiceCreateRequest.md#fields)
- [runtime](AssetIndentsServiceCreateRequest.md#runtime)
- [typeName](AssetIndentsServiceCreateRequest.md#typename)

### Methods

- [clone](AssetIndentsServiceCreateRequest.md#clone)
- [equals](AssetIndentsServiceCreateRequest.md#equals)
- [fromBinary](AssetIndentsServiceCreateRequest.md#frombinary)
- [fromJson](AssetIndentsServiceCreateRequest.md#fromjson)
- [fromJsonString](AssetIndentsServiceCreateRequest.md#fromjsonstring)
- [getType](AssetIndentsServiceCreateRequest.md#gettype)
- [toBinary](AssetIndentsServiceCreateRequest.md#tobinary)
- [toJSON](AssetIndentsServiceCreateRequest.md#tojson)
- [toJson](AssetIndentsServiceCreateRequest.md#tojson-1)
- [toJsonString](AssetIndentsServiceCreateRequest.md#tojsonstring)
- [equals](AssetIndentsServiceCreateRequest.md#equals-1)
- [fromBinary](AssetIndentsServiceCreateRequest.md#frombinary-1)
- [fromJson](AssetIndentsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](AssetIndentsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssetIndentsServiceCreateRequest**(`data?`): [`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)\> |

#### Returns

[`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)

#### Overrides

Message\&lt;AssetIndentsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/asset_indents.scailo_pb.ts:318](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/asset_indents.scailo_pb.ts#L318)

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

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

from field: string entity_uuid = 1;

#### Defined in

[src/asset_indents.scailo_pb.ts:233](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/asset_indents.scailo_pb.ts#L233)

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

[src/asset_indents.scailo_pb.ts:316](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/asset_indents.scailo_pb.ts#L316)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 14;

#### Defined in

[src/asset_indents.scailo_pb.ts:295](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/asset_indents.scailo_pb.ts#L295)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: uint64 project_id = 8;

#### Defined in

[src/asset_indents.scailo_pb.ts:256](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/asset_indents.scailo_pb.ts#L256)

___

### referenceId

• **referenceId**: `string` = `""`

**`Mandatory`**

**`Description`**

A unique external reference ID for the record. Must be alphanumeric (spaces allowed). Used for cross-referencing with external systems.

**`Example`**

```ts
"ABS-2023-001"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/asset_indents.scailo_pb.ts:288](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/asset_indents.scailo_pb.ts#L288)

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

from field: string user_comment = 2;

#### Defined in

[src/asset_indents.scailo_pb.ts:249](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/asset_indents.scailo_pb.ts#L249)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the associated user

**`Generated`**

from field: uint64 user_id = 15;

#### Defined in

[src/asset_indents.scailo_pb.ts:302](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/asset_indents.scailo_pb.ts#L302)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

The ID of the associated vault folder for storing documents. Defaults to 0 if no specific folder is assigned.

**`Example`**

```ts
15234
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/asset_indents.scailo_pb.ts:272](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/asset_indents.scailo_pb.ts#L272)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/asset_indents.scailo_pb.ts:325](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/asset_indents.scailo_pb.ts#L325)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/asset_indents.scailo_pb.ts:323](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/asset_indents.scailo_pb.ts#L323)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssetIndentsServiceCreateRequest"``

#### Defined in

[src/asset_indents.scailo_pb.ts:324](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/asset_indents.scailo_pb.ts#L324)

## Methods

### clone

▸ **clone**(): [`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md) \| `PlainMessage`\<[`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md) \| `PlainMessage`\<[`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md) \| `PlainMessage`\<[`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/asset_indents.scailo_pb.ts:348](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/asset_indents.scailo_pb.ts#L348)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:336](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/asset_indents.scailo_pb.ts#L336)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:340](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/asset_indents.scailo_pb.ts#L340)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:344](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/asset_indents.scailo_pb.ts#L344)
