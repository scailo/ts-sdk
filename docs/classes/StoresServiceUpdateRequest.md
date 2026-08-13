[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StoresServiceUpdateRequest

# Class: StoresServiceUpdateRequest

Request message for updating an existing Store record.
Only applicable for records in `DRAFT` or `REVISION` states.
This message allows for modifying the name, code, description, incharge username, and phone
of an established Store.

**Note:** Only fields provided in the request will typically be updated.
The unique system ID is required to locate the target record.

**`Generated`**

from message Scailo.StoresServiceUpdateRequest

## Hierarchy

- `Message`\<[`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)\>

  ↳ **`StoresServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](StoresServiceUpdateRequest.md#constructor)

### Properties

- [code](StoresServiceUpdateRequest.md#code)
- [description](StoresServiceUpdateRequest.md#description)
- [id](StoresServiceUpdateRequest.md#id)
- [inchargeUsername](StoresServiceUpdateRequest.md#inchargeusername)
- [name](StoresServiceUpdateRequest.md#name)
- [notifyUsers](StoresServiceUpdateRequest.md#notifyusers)
- [phone](StoresServiceUpdateRequest.md#phone)
- [userComment](StoresServiceUpdateRequest.md#usercomment)
- [fields](StoresServiceUpdateRequest.md#fields)
- [runtime](StoresServiceUpdateRequest.md#runtime)
- [typeName](StoresServiceUpdateRequest.md#typename)

### Methods

- [clone](StoresServiceUpdateRequest.md#clone)
- [equals](StoresServiceUpdateRequest.md#equals)
- [fromBinary](StoresServiceUpdateRequest.md#frombinary)
- [fromJson](StoresServiceUpdateRequest.md#fromjson)
- [fromJsonString](StoresServiceUpdateRequest.md#fromjsonstring)
- [getType](StoresServiceUpdateRequest.md#gettype)
- [toBinary](StoresServiceUpdateRequest.md#tobinary)
- [toJSON](StoresServiceUpdateRequest.md#tojson)
- [toJson](StoresServiceUpdateRequest.md#tojson-1)
- [toJsonString](StoresServiceUpdateRequest.md#tojsonstring)
- [equals](StoresServiceUpdateRequest.md#equals-1)
- [fromBinary](StoresServiceUpdateRequest.md#frombinary-1)
- [fromJson](StoresServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](StoresServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StoresServiceUpdateRequest**(`data?`): [`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)\> |

#### Returns

[`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)

#### Overrides

Message\&lt;StoresServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/stores.scailo_pb.ts:397](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L397)

## Properties

### code

• `Optional` **code**: `string`

**`Optional`**

**`Description`**

The unique code or internal alphanumeric token used to classify the store facility for accounting, delivery, or inventory mapping.

**`Example`**

```ts
"STR-DT-01"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string code = 11;

#### Defined in

[src/stores.scailo_pb.ts:347](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L347)

___

### description

• `Optional` **description**: `string`

**`Optional`**

**`Description`**

Clarifying details or operational parameters regarding the store layout, capacity thresholds, or hours of operation.

**`Example`**

```ts
"Primary retail outlet serving the metropolitan area. Includes standard fulfillment capabilities."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string description = 12;

#### Defined in

[src/stores.scailo_pb.ts:363](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L363)

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

[src/stores.scailo_pb.ts:303](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L303)

___

### inchargeUsername

• `Optional` **inchargeUsername**: `string`

**`Optional`**

**`Description`**

The unique system username or account identifier of the person-in-charge or facility manager responsible for this store.

**`Example`**

```ts
"johndoe_mgr"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string representing a valid user identity token.

**`Generated`**

from field: optional string incharge_username = 13;

#### Defined in

[src/stores.scailo_pb.ts:379](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L379)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The official, friendly, or legal branding name of the store facility.

**`Example`**

```ts
"Downtown Flagship Store"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 10;

#### Defined in

[src/stores.scailo_pb.ts:331](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L331)

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

[src/stores.scailo_pb.ts:315](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L315)

___

### phone

• `Optional` **phone**: `string`

**`Optional`**

**`Description`**

The primary telephone or hot-line contact number explicitly assigned to the store facility.

**`Example`**

```ts
"+1-555-0177"
```

**`Regex`**

.*

**`Format`**

If provided, should follow valid regional or international telephone formatting specifications.

**`Generated`**

from field: optional string phone = 14;

#### Defined in

[src/stores.scailo_pb.ts:395](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L395)

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

[src/stores.scailo_pb.ts:287](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L287)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stores.scailo_pb.ts:404](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L404)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stores.scailo_pb.ts:402](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L402)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StoresServiceUpdateRequest"``

#### Defined in

[src/stores.scailo_pb.ts:403](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L403)

## Methods

### clone

▸ **clone**(): [`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md) \| `PlainMessage`\<[`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md) \| `PlainMessage`\<[`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md) \| `PlainMessage`\<[`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stores.scailo_pb.ts:427](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L427)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)

#### Defined in

[src/stores.scailo_pb.ts:415](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L415)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)

#### Defined in

[src/stores.scailo_pb.ts:419](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L419)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)

#### Defined in

[src/stores.scailo_pb.ts:423](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L423)
