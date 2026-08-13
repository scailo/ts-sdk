[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCGroupsServiceCreateRequest

# Class: QCGroupsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.QCGroupsServiceCreateRequest

## Hierarchy

- `Message`\<[`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)\>

  ↳ **`QCGroupsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](QCGroupsServiceCreateRequest.md#constructor)

### Properties

- [code](QCGroupsServiceCreateRequest.md#code)
- [description](QCGroupsServiceCreateRequest.md#description)
- [entityUuid](QCGroupsServiceCreateRequest.md#entityuuid)
- [formData](QCGroupsServiceCreateRequest.md#formdata)
- [name](QCGroupsServiceCreateRequest.md#name)
- [userComment](QCGroupsServiceCreateRequest.md#usercomment)
- [vaultFolderId](QCGroupsServiceCreateRequest.md#vaultfolderid)
- [fields](QCGroupsServiceCreateRequest.md#fields)
- [runtime](QCGroupsServiceCreateRequest.md#runtime)
- [typeName](QCGroupsServiceCreateRequest.md#typename)

### Methods

- [clone](QCGroupsServiceCreateRequest.md#clone)
- [equals](QCGroupsServiceCreateRequest.md#equals)
- [fromBinary](QCGroupsServiceCreateRequest.md#frombinary)
- [fromJson](QCGroupsServiceCreateRequest.md#fromjson)
- [fromJsonString](QCGroupsServiceCreateRequest.md#fromjsonstring)
- [getType](QCGroupsServiceCreateRequest.md#gettype)
- [toBinary](QCGroupsServiceCreateRequest.md#tobinary)
- [toJSON](QCGroupsServiceCreateRequest.md#tojson)
- [toJson](QCGroupsServiceCreateRequest.md#tojson-1)
- [toJsonString](QCGroupsServiceCreateRequest.md#tojsonstring)
- [equals](QCGroupsServiceCreateRequest.md#equals-1)
- [fromBinary](QCGroupsServiceCreateRequest.md#frombinary-1)
- [fromJson](QCGroupsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](QCGroupsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCGroupsServiceCreateRequest**(`data?`): [`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)\> |

#### Returns

[`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)

#### Overrides

Message\&lt;QCGroupsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/qc_groups.scailo_pb.ts:345](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L345)

## Properties

### code

• **code**: `string` = `""`

The qc group code

**`Generated`**

from field: string code = 11;

#### Defined in

[src/qc_groups.scailo_pb.ts:322](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L322)

___

### description

• **description**: `string` = `""`

The description of the qc group

**`Generated`**

from field: string description = 13;

#### Defined in

[src/qc_groups.scailo_pb.ts:329](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L329)

___

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

[src/qc_groups.scailo_pb.ts:276](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L276)

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

[src/qc_groups.scailo_pb.ts:343](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L343)

___

### name

• **name**: `string` = `""`

The name of the qc group

**`Generated`**

from field: string name = 10;

#### Defined in

[src/qc_groups.scailo_pb.ts:315](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L315)

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

[src/qc_groups.scailo_pb.ts:292](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L292)

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

[src/qc_groups.scailo_pb.ts:308](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L308)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_groups.scailo_pb.ts:352](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L352)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_groups.scailo_pb.ts:350](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L350)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCGroupsServiceCreateRequest"``

#### Defined in

[src/qc_groups.scailo_pb.ts:351](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L351)

## Methods

### clone

▸ **clone**(): [`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md) \| `PlainMessage`\<[`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md) \| `PlainMessage`\<[`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md) \| `PlainMessage`\<[`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_groups.scailo_pb.ts:374](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L374)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)

#### Defined in

[src/qc_groups.scailo_pb.ts:362](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L362)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)

#### Defined in

[src/qc_groups.scailo_pb.ts:366](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L366)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)

#### Defined in

[src/qc_groups.scailo_pb.ts:370](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L370)
