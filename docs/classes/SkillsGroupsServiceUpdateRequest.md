[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SkillsGroupsServiceUpdateRequest

# Class: SkillsGroupsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.SkillsGroupsServiceUpdateRequest

## Hierarchy

- `Message`\<[`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)\>

  ↳ **`SkillsGroupsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SkillsGroupsServiceUpdateRequest.md#constructor)

### Properties

- [code](SkillsGroupsServiceUpdateRequest.md#code)
- [description](SkillsGroupsServiceUpdateRequest.md#description)
- [formData](SkillsGroupsServiceUpdateRequest.md#formdata)
- [id](SkillsGroupsServiceUpdateRequest.md#id)
- [name](SkillsGroupsServiceUpdateRequest.md#name)
- [notifyUsers](SkillsGroupsServiceUpdateRequest.md#notifyusers)
- [roleId](SkillsGroupsServiceUpdateRequest.md#roleid)
- [userComment](SkillsGroupsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](SkillsGroupsServiceUpdateRequest.md#vaultfolderid)
- [fields](SkillsGroupsServiceUpdateRequest.md#fields)
- [runtime](SkillsGroupsServiceUpdateRequest.md#runtime)
- [typeName](SkillsGroupsServiceUpdateRequest.md#typename)

### Methods

- [clone](SkillsGroupsServiceUpdateRequest.md#clone)
- [equals](SkillsGroupsServiceUpdateRequest.md#equals)
- [fromBinary](SkillsGroupsServiceUpdateRequest.md#frombinary)
- [fromJson](SkillsGroupsServiceUpdateRequest.md#fromjson)
- [fromJsonString](SkillsGroupsServiceUpdateRequest.md#fromjsonstring)
- [getType](SkillsGroupsServiceUpdateRequest.md#gettype)
- [toBinary](SkillsGroupsServiceUpdateRequest.md#tobinary)
- [toJSON](SkillsGroupsServiceUpdateRequest.md#tojson)
- [toJson](SkillsGroupsServiceUpdateRequest.md#tojson-1)
- [toJsonString](SkillsGroupsServiceUpdateRequest.md#tojsonstring)
- [equals](SkillsGroupsServiceUpdateRequest.md#equals-1)
- [fromBinary](SkillsGroupsServiceUpdateRequest.md#frombinary-1)
- [fromJson](SkillsGroupsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](SkillsGroupsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillsGroupsServiceUpdateRequest**(`data?`): [`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)\> |

#### Returns

[`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)

#### Overrides

Message\&lt;SkillsGroupsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/skills_groups.scailo_pb.ts:386](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/skills_groups.scailo_pb.ts#L386)

## Properties

### code

• **code**: `string` = `""`

The skill group code

**`Generated`**

from field: string code = 11;

#### Defined in

[src/skills_groups.scailo_pb.ts:356](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/skills_groups.scailo_pb.ts#L356)

___

### description

• **description**: `string` = `""`

The description of the skill group

**`Generated`**

from field: string description = 13;

#### Defined in

[src/skills_groups.scailo_pb.ts:370](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/skills_groups.scailo_pb.ts#L370)

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

[src/skills_groups.scailo_pb.ts:384](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/skills_groups.scailo_pb.ts#L384)

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

[src/skills_groups.scailo_pb.ts:314](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/skills_groups.scailo_pb.ts#L314)

___

### name

• **name**: `string` = `""`

The name of the skill group

**`Generated`**

from field: string name = 10;

#### Defined in

[src/skills_groups.scailo_pb.ts:349](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/skills_groups.scailo_pb.ts#L349)

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

[src/skills_groups.scailo_pb.ts:326](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/skills_groups.scailo_pb.ts#L326)

___

### roleId

• **roleId**: `bigint` = `protoInt64.zero`

The ID of the role that this skill group belongs to

**`Generated`**

from field: uint64 role_id = 12;

#### Defined in

[src/skills_groups.scailo_pb.ts:363](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/skills_groups.scailo_pb.ts#L363)

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

[src/skills_groups.scailo_pb.ts:298](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/skills_groups.scailo_pb.ts#L298)

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

[src/skills_groups.scailo_pb.ts:342](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/skills_groups.scailo_pb.ts#L342)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/skills_groups.scailo_pb.ts:393](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/skills_groups.scailo_pb.ts#L393)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/skills_groups.scailo_pb.ts:391](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/skills_groups.scailo_pb.ts#L391)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SkillsGroupsServiceUpdateRequest"``

#### Defined in

[src/skills_groups.scailo_pb.ts:392](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/skills_groups.scailo_pb.ts#L392)

## Methods

### clone

▸ **clone**(): [`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md) \| `PlainMessage`\<[`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md) \| `PlainMessage`\<[`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md) \| `PlainMessage`\<[`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/skills_groups.scailo_pb.ts:417](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/skills_groups.scailo_pb.ts#L417)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)

#### Defined in

[src/skills_groups.scailo_pb.ts:405](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/skills_groups.scailo_pb.ts#L405)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)

#### Defined in

[src/skills_groups.scailo_pb.ts:409](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/skills_groups.scailo_pb.ts#L409)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)

#### Defined in

[src/skills_groups.scailo_pb.ts:413](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/skills_groups.scailo_pb.ts#L413)
