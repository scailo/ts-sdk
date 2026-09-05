[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoalsServiceCreateRequest

# Class: GoalsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.GoalsServiceCreateRequest

## Hierarchy

- `Message`\<[`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)\>

  ↳ **`GoalsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](GoalsServiceCreateRequest.md#constructor)

### Properties

- [description](GoalsServiceCreateRequest.md#description)
- [endDate](GoalsServiceCreateRequest.md#enddate)
- [entityUuid](GoalsServiceCreateRequest.md#entityuuid)
- [formData](GoalsServiceCreateRequest.md#formdata)
- [referenceId](GoalsServiceCreateRequest.md#referenceid)
- [startDate](GoalsServiceCreateRequest.md#startdate)
- [userComment](GoalsServiceCreateRequest.md#usercomment)
- [userId](GoalsServiceCreateRequest.md#userid)
- [vaultFolderId](GoalsServiceCreateRequest.md#vaultfolderid)
- [fields](GoalsServiceCreateRequest.md#fields)
- [runtime](GoalsServiceCreateRequest.md#runtime)
- [typeName](GoalsServiceCreateRequest.md#typename)

### Methods

- [clone](GoalsServiceCreateRequest.md#clone)
- [equals](GoalsServiceCreateRequest.md#equals)
- [fromBinary](GoalsServiceCreateRequest.md#frombinary)
- [fromJson](GoalsServiceCreateRequest.md#fromjson)
- [fromJsonString](GoalsServiceCreateRequest.md#fromjsonstring)
- [getType](GoalsServiceCreateRequest.md#gettype)
- [toBinary](GoalsServiceCreateRequest.md#tobinary)
- [toJSON](GoalsServiceCreateRequest.md#tojson)
- [toJson](GoalsServiceCreateRequest.md#tojson-1)
- [toJsonString](GoalsServiceCreateRequest.md#tojsonstring)
- [equals](GoalsServiceCreateRequest.md#equals-1)
- [fromBinary](GoalsServiceCreateRequest.md#frombinary-1)
- [fromJson](GoalsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](GoalsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoalsServiceCreateRequest**(`data?`): [`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)\> |

#### Returns

[`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)

#### Overrides

Message\&lt;GoalsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/goals.scailo_pb.ts:352](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L352)

## Properties

### description

• **description**: `string` = `""`

The description of the goal

**`Generated`**

from field: string description = 20;

#### Defined in

[src/goals.scailo_pb.ts:336](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L336)

___

### endDate

• **endDate**: `string` = `""`

The date until which the goal remains into force

**`Generated`**

from field: string end_date = 14;

#### Defined in

[src/goals.scailo_pb.ts:329](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L329)

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

[src/goals.scailo_pb.ts:260](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L260)

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

[src/goals.scailo_pb.ts:350](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L350)

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

[src/goals.scailo_pb.ts:308](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L308)

___

### startDate

• **startDate**: `string` = `""`

The date from which the goal comes into force

**`Generated`**

from field: string start_date = 13;

#### Defined in

[src/goals.scailo_pb.ts:322](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L322)

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

[src/goals.scailo_pb.ts:276](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L276)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The associated user ID

**`Generated`**

from field: uint64 user_id = 12;

#### Defined in

[src/goals.scailo_pb.ts:315](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L315)

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

[src/goals.scailo_pb.ts:292](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L292)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goals.scailo_pb.ts:359](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L359)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goals.scailo_pb.ts:357](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L357)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoalsServiceCreateRequest"``

#### Defined in

[src/goals.scailo_pb.ts:358](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L358)

## Methods

### clone

▸ **clone**(): [`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md) \| `PlainMessage`\<[`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md) \| `PlainMessage`\<[`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md) \| `PlainMessage`\<[`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goals.scailo_pb.ts:383](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L383)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)

#### Defined in

[src/goals.scailo_pb.ts:371](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L371)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)

#### Defined in

[src/goals.scailo_pb.ts:375](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L375)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)

#### Defined in

[src/goals.scailo_pb.ts:379](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L379)
