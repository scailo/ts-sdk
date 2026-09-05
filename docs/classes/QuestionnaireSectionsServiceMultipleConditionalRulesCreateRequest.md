[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest

# Class: QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest

Request message for appending multiple line items to a Questionnaire Section in a single batch transaction.
Optimized for scenarios like order imports or autofill operations where dozens of items
are attached simultaneously to a parent record.

**`Generated`**

from message Scailo.QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest

## Hierarchy

- `Message`\<[`QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest`](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md)\>

  ↳ **`QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest`**

## Table of contents

### Constructors

- [constructor](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md#constructor)

### Properties

- [list](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md#list)
- [questionnaireSectionId](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md#questionnairesectionid)
- [userComment](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md#usercomment)
- [fields](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md#fields)
- [runtime](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md#runtime)
- [typeName](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md#typename)

### Methods

- [clone](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md#clone)
- [equals](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md#equals)
- [fromBinary](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md#frombinary)
- [fromJson](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md#fromjson)
- [fromJsonString](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md#fromjsonstring)
- [getType](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md#gettype)
- [toBinary](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md#tobinary)
- [toJSON](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md#tojson)
- [toJson](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md#tojson-1)
- [toJsonString](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md#tojsonstring)
- [equals](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md#equals-1)
- [fromBinary](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md#frombinary-1)
- [fromJson](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md#fromjson-1)
- [fromJsonString](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest**(`data?`): [`QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest`](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest`](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md)\> |

#### Returns

[`QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest`](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md)

#### Overrides

Message\&lt;QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest\&gt;.constructor

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2459](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2459)

## Properties

### list

• **list**: [`QuestionnaireSectionsServiceMultipleConditionalRulesSingleton`](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md)[] = `[]`

**`Mandatory`**

**`Description`**

An array containing the individual line item payloads to be appended to the order.

**`Example`**

```ts
[]
```

**`Format`**

Repeated array of QuestionnaireSectionsServiceMultipleConditionalRulesSingleton message blocks.

**`Generated`**

from field: repeated Scailo.QuestionnaireSectionsServiceMultipleConditionalRulesSingleton list = 11;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2457](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2457)

___

### questionnaireSectionId

• **questionnaireSectionId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the parent questionnaire section to which this batch of items will be attached.

**`Example`**

```ts
1024
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 questionnaire_section_id = 10;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2443](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2443)

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

[src/questionnaire_sections.scailo_pb.ts:2427](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2427)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2466](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2466)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2464](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2464)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest"``

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2465](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2465)

## Methods

### clone

▸ **clone**(): [`QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest`](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md)

Create a deep copy.

#### Returns

[`QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest`](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest`](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md) \| `PlainMessage`\<[`QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest`](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest`](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest`](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md)\>

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
| `a` | `undefined` \| [`QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest`](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md) \| `PlainMessage`\<[`QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest`](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md)\> |
| `b` | `undefined` \| [`QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest`](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md) \| `PlainMessage`\<[`QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest`](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2484](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2484)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest`](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest`](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2472](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2472)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest`](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest`](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2476](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2476)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest`](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest`](QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2480](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2480)
